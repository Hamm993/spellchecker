let word = prompt("Spellchecker: Enter a word >> ");

async function searchInFile() {
    const searchString = word;
    try {
        // Fetch the content of the text file
        const response = await fetch('dictionary.txt');
        if (!response.ok) throw new Error('Network response was not ok');

        const text = await response.text();
        
        // Check if the search string is in the text
        if (text.includes(searchString)) {
            console.log(`${searchString} is spelled correctly`);
        } else {
            console.log(`${searchString} is not spelled correctly`);
        }
    } catch (error) {
        console.log('Error fetching the file:', error);
    }
}

searchInFile();