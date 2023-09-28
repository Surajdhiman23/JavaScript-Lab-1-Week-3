// VARIABLE DECLARATIONS

// STEP 1
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// STEP 3
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

// Function to return a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6 - Completion of result() function
function result() {
    // STEP 7
    var newStory = storyText;

    // STEP 8
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Adjust for unit system
    if(document.getElementById('metric').checked) {
        var weight = Math.round(300 * 0.453592) + ' kilograms'; // Convert pounds to kilograms
        var temperature =  Math.round((94 - 32) * 5 / 9) + ' celsius'; // Convert Fahrenheit to Celsius
        newStory = newStory.replace('94 farenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    // STEP 9
    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem).replace(':insertx:', xItem);

    // Replace the name 'Bob' if a custom name is entered
    if (customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // Make the story visible and display it
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

// Event listener for the randomize button
randomize.addEventListener('click', result);
