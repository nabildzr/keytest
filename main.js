

function add() {
    let user = document.querySelector(".username").value
    let token = document.querySelector(".token").value

    // api example w want make json but next time 
    apikey = ~~(Math.random() * 12345678)

    let title = document.querySelector(".title")

    let display = document.querySelector(".display")

    const login = (username) => {
        return new Promise((success, failed) => {
            if (username != "nabil") {
                title.innerText = "Token or User is not found";
                failed("Token or User is not found");
            } else {
                title.innerText = "User found";

                success("User Found")
            }
        })
    }

    const generateAPI = (token) => {
        return new Promise((success, failed) => {
            if (token != "kalsei") {
                title.innerText = "Token or User is not found";
                failed("Token or User is not found");
            } else {
                title.innerText = "API generated successfully";
                success("API generated successfully");
                updateDisplayForAPI();
            }
        })
    }

    const updateDisplayForAPI = () => {
        const backupDisplay = document.querySelector(".backup-display");
        backupDisplay.innerHTML = `
            <h4>Your api key: ${apikey}</h4>

            <input class="apikey input-c" type="text" placeholder="Your API Key">
            <button onClick="confirmAPI()" class="btn-confirm">Confirm</button>
        `;
    }

    login(user).catch(error => console.error(error));
    generateAPI(token).catch(error => console.error(error));


}


function confirmAPI() {
    return new Promise((success, failed) => {
        if (!apikey) {
            failed("Wrong API key. Please try again")

            setTimeout(() => {
                location.reload();
            }, 2000);
            console.log("API Key:", apikey);
            document.querySelector(".title").innerText = "Your API is wrong, try again";
        } else {
            backupPage();
            document.querySelector(".title").innerText = "Your API is correct";
            success("Backup Page");
        }
    })


}

function backupPage() {
    const backupDisplay = document.querySelector(".backup-display");
    backupDisplay.innerHTML = `
            <h4>Your api key: ${apikey}</h4>
            <h4>Your backup:</h4>
            <ul class="backup-list">
                <li>Backup 1</li>
                <li>Backup 2</li>
                <li>Backup 3</li>
            </ul>
        `;
    setTimeout(() => {
        document.querySelector(".title").innerText = "Backup Page";
    }, 500)
}