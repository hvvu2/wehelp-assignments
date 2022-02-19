//Member page for different function.
const memberIndexLink = document.getElementById("member-index");
const memberProfileLink = document.getElementById("member-profile");
const memberSettingsLink = document.getElementById("member-settings");
const memberIndexPage = document.getElementById("member-index-box");
const memberProfilePage = document.getElementById("member-profile-box");
const memberSettingsPage = document.getElementById("member-settings-box");

memberIndexLink.addEventListener("click", () => {
    memberIndexPage.classList.remove("hide");
    memberProfilePage.classList.remove("show");
    memberSettingsPage.classList.remove("show");
});

memberProfileLink.addEventListener("click", () => {
    memberIndexPage.classList.add("hide");
    memberProfilePage.classList.add("show");
    memberSettingsPage.classList.remove("show");
});

memberSettingsLink.addEventListener("click", () => {
    memberIndexPage.classList.add("hide");
    memberProfilePage.classList.remove("show");
    memberSettingsPage.classList.add("show");
});

