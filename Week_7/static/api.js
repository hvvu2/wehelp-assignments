const searchBtn = document.getElementById("member-search-button");
const searchInput = document.getElementById("member-search");
const searchResult = document.getElementById("member-search-result");

searchBtn.addEventListener("click", () => {
    const targetUsername = searchInput.value;
    const url = "/api/members?username=" + targetUsername;

    fetch(url).then((response) => {
            const promise = response.json();
            promise.then((result) => {
                const data = result.data;

                if (data != null) {
                    const targetUser = data.name + " ( " + data.username + " )";
                    searchResult.innerText=targetUser;
                }

                else {
                    searchResult.innerText="Oops! It seems that they have not joined us.";
                }
            });
        });
});

const memberNewname = document.getElementById("member-profile-newname");
const memberConfirm = document.getElementById("member-profile-newname-button");
const memberNameResult = document.getElementById("member-profile-newname-result");
const memberIndexName = document.getElementById("member-index-name");

memberConfirm.addEventListener("click", () => {
    const newName = memberNewname.value;
    const data = {"name":newName};
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch("/api/member", option).then((response) => {
        const promise = response.json();
        promise. then((result) => {
            const ok = result.ok;
            const error = result.error;

            if (ok) {
                memberNameResult.classList.remove("error");
                memberIndexName.innerText=newName;
                memberNameResult.innerText="Your name has been updated!";
            }

            else if (error) {
                memberNameResult.classList.add("error");
                memberNameResult.innerText="Oops! You must login before changing your name.";
            }

        })
    });
});
