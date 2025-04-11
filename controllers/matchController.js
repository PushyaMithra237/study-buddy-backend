const Note = require('../models/Note');

const matchBuddies = async (req, res) => {
  const currentUser = req.query.user;
  if (!currentUser) return res.status(400).json({ message: 'Username is required.' });

  try {
    // Step 1: Get current user's notes
    const userNotes = await Note.find({ user: currentUser });

    // Step 2: Get their unique categories or tags
    const userTags = [...new Set(userNotes.flatMap(note => note.tags || []))];
    const userCategory = [...new Set(userNotes.map(note => note.category))];

    // Step 3: Find other users with overlapping topics
    const otherNotes = await Note.find({
      user: { $ne: currentUser }, // exclude current user
      $or: [
        { tags: { $in: userTags } },
        { category: { $in: userCategory } }
      ]
    });

    // Step 4: Group by user
    const matches = {};
    otherNotes.forEach(note => {
      if (!matches[note.user]) {
        matches[note.user] = new Set();
      }

      if (note.tags) {
        note.tags.forEach(tag => {
          if (userTags.includes(tag)) matches[note.user].add(tag);
        });
      }

      if (userCategory.includes(note.category)) {
        matches[note.user].add(note.category);
      }
    });

    // Step 5: Format the response
    const result = Object.entries(matches).map(([username, sharedSet]) => ({
      username,
      sharedTopics: Array.from(sharedSet)
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { matchBuddies };
