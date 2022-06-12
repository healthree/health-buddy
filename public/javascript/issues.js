async function getIssues(event) {
    const issueId = document.querySelector('input[name="issue-Id"]').value;

    // function to loop though all data base items and find the issue's id by searching it against its name
    
    event.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3ca2473663mshadfed96d78e1943p118f82jsnb3ea968dd263',
            'X-RapidAPI-Host': 'priaid-symptom-checker-v1.p.rapidapi.com'
        },
    };
    
    fetch(`https://priaid-symptom-checker-v1.p.rapidapi.com/issues/${issueId}/info?language=en-gb`, options)
        .then(response => response.json())
        .then((data) => {
            var result = document.getElementById("result-content");
            result.textContent = data;
            console.log(data);
        })
        .catch(err => console.error(err));
}
    
document.querySelector(".issue-form").addEventListener("submit", getIssues);

    
    

  