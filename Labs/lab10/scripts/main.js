
// =================================================================================================
// Scroll to the bottom of the file to add your own code for this lab.
// =================================================================================================

/**
 * A random collection of emojis for all your element-creation needs :)
 *
 * @note You can make good use of _Destructuring Assignments_ with these objects, especially when
 * paired with the `getRandomEmoji` function down below. Check out that function's doc comment for
 * an example.
 *
 * @see {@link getRandomEmoji}
 */
const emojiList = [
    { emoji: '🦈', category: 'animal', name: 'shark' },
    { emoji: '🦔', category: 'animal', name: 'hedgehog' },
    { emoji: '🐐', category: 'animal', name: 'goat' },
    { emoji: '🐄', category: 'animal', name: 'cow' },
    { emoji: '🔥', category: 'nature', name: 'fire' },
    { emoji: '💄', category: 'object', name: 'lipstick' },
    { emoji: '⚽', category: 'object', name: 'soccer-ball' },
    { emoji: '🌯', category: 'food', name: 'burrito' },
    { emoji: '✨', category: 'nature', name: 'sparkles' },
    { emoji: '🦞', category: 'animal', name: 'lobster' },
    { emoji: '🛁', category: 'object', name: 'bathtub' },
    { emoji: '🌈', category: 'nature', name: 'rainbow' },
    { emoji: '🌊', category: 'nature', name: 'water-wave' },
    { emoji: '👁', category: 'person', name: 'eye' },
    { emoji: '👀', category: 'person', name: 'eyes' },
    { emoji: '🦀', category: 'animal', name: 'crab' },
    { emoji: '🤩', category: 'smiley', name: 'star-struck' },
    { emoji: '🥰', category: 'smiley', name: 'smiling-face-with-hearts' },
    { emoji: '👄', category: 'person', name: 'mouth' },
    { emoji: '🦅', category: 'animal', name: 'eagle' },
    { emoji: '🌠', category: 'nature', name: 'shooting-star' },
    { emoji: '🪑', category: 'object', name: 'chair' },
    { emoji: '🛏', category: 'object', name: 'bed' },
    { emoji: '🐖', category: 'animal', name: 'pig' },
    { emoji: '🎨', category: 'object', name: 'artist-palette' },
    { emoji: '🍟', category: 'food', name: 'french-fries' },
    { emoji: '😂', category: 'smiley', name: 'face-with-tears-of-joy' },
    { emoji: '🛋', category: 'object', name: 'couch-and-lamp' },
    { emoji: '😎', category: 'smiley', name: 'smiling-face-with-sunglasses' },
    { emoji: '🦆', category: 'animal', name: 'duck' },
];

/**
 * Randomly selects a new emoji from `emojiList`, for all your emoji-related needs :)
 *
 * @example This example uses _destructuring assignment_ to grab just the emoji and category of a
 * random emoji from `emojiList`, ignoring its name:
 *
 * ```js
 * const { emoji, category } = getRandomEmoji();
 * console.log(`The ${emoji} emoji is part of the ${category} category.`);
 * // => The 🐖 emoji is part of the animal category.
 * ```
 *
 * @see {@link emojiList}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring}
 */
const getRandomEmoji = () => emojiList[Math.floor(Math.random() * emojiList.length)];

// =================================================================================================

const button1 = document.querySelector('#part-1 button');
const button2 = document.querySelector('#part-2 button');

const list1CloneItems = document.querySelectorAll('#part-1 .clone');
const list1RemoveItems = document.querySelectorAll('#part-1 .remove');

const list2 = document.querySelector('#part-2 ul');

// =================================================================================================

// Part 1.1

/**
 * Event handler for the "new emoji" buttons.
 * @param {MouseEvent} event
 */
function appendToSibling(event) {
    // Complete the function
}

// Add event listener here

// --------------------------------------------------

// Part 1.2

// Loop to add the required event listener to each selected 'clone' item


// Loop to add the required event listener to each selected 'remove' item

// --------------------------------------------------

// Part 2.1

/**
 * Event handler for the "new emoji" buttons.
 * @param {MouseEvent} event
 */
function appendRandomToSibling(event) {
   // Complete function 
}

// Add event listener here


// --------------------------------------------------

// Part 2.2

// Add event listener here

