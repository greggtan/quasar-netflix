<template>
    <div>
    <div class="accountsDiv flexBetween">
    <div class="account flexColumn">
        <img src='https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41'>
        <span>Leng L...</span>
    </div>

    <div class="account flexColumn">
        <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71">
        <span>Steven</span>
    </div>

    <div class="account flexColumn activeAccount">
        <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSz8U4uC6_i0Fuc-oUrLQ-6_4cN4K_0kkS76utZWTEfAAFwG6TB09D0nSC1NqqtCJfckNvLVMajXBYjOSGc7zZi0Dx7z.png?r=b97">
        <span>Greg</span>
    </div>

    <div class="account flexColumn">
        <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVe7NFEhY9nQ0GVNhrTKDY4dIlnQeKT5agTLZUn27CzB084qO9zTzPmBypU8VYofnAVVYcdbMYHKuqy6ODVkNugyEzIu.png?r=4cb">
        <span>Gwen</span>
    </div>

    <div class="account flexColumn">
        <div class="addAccount flexCenter">
            <i class="fas fa-plus"></i>
        </div>
        <span>Add Pr...</span>
    </div>
</div>

<div class="manageProfilesDiv flexCenter">
    <i class="fas fa-pencil-alt"></i>
    <span>Manage Profiles</span>
</div>

<div class="giveNetflixDiv">
    <div class="giveHeader">
        <i class="fas fa-gift"></i>
        <span>Give Free Netflix to Your Friends.</span>
    </div>

    <span class='shareSpan'>Share this link with friends or family and they'll start watching Netflix, just like you.</span>
    <br>

    <a href=''>Terms & Conditions</a>

    <div class="linkDiv flexBetween">
        <span>https://www.netflix.com/sg/n/c8784db3-fb94-44...</span>
        <div class="copyButton">
            <span>Copy Link</span>
        </div>

    </div>

    <div class="referDiv flexCenter">
        <span>Refer a friend</span>
        <i class="fas fa-external-link-alt"></i>
    </div>
</div>

<div class="optionsMenu">
    <div class="options flexBetween">
        <div class="leftOptions">
            <i class="fas fa-check"></i>
            <span>My List</span>
        </div>

        <div class="rightOptions">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>

    <div class="options flexBetween">
        <div class="leftOptions">
            <i class="fas fa-cog"></i>
            <span>App Settings</span>
        </div>

        <div class="rightOptions">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>

    <div class="options flexBetween">
        <div class="leftOptions">
            <i class="far fa-user"></i>
            <span>Account</span>
        </div>

        <div class="rightOptions">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>

    <div class="options flexBetween">
        <div class="leftOptions">
            <i class="far fa-question-circle"></i>
            <span>Help</span>
        </div>

        <div class="rightOptions">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</div>

<div class="signOutSpan flexCenter">
    <span>Sign Out</span>
</div>
<div class="versionSpan flexCenter">
    <span>Version: 12.30.0 (3073) 5.0.1 -001</span>
</div>
    </div>
</template>

<style scoped>
    .accountsDiv {
        padding: 20px 10px;
    }

    .account {
        width: 15vw;
    }

    .addAccount {
        width: 100%;
        height: 14.5vw;
        border: 2px solid #4B4B4B;
        border-radius: 4px;
        margin-bottom: 5px;
    }

    .addAccount i {
        color: #767676;
        font-size: 30px;
    }

    .account img {
        width: 100%;
        margin-bottom: 5px;
        border-radius: 4px;
    }

    .account span {
        color: #767676;
        font-weight: 500;
        font-size: 14px;
    }

    .activeAccount img {
        border: 2px solid white;
    }

    .activeAccount span {
        color: white;
    }

    .manageProfilesDiv {
        color: #767676;
        font-size: 16px;
        font-weight: 500;
        padding: 25px 30px;
    }

    .manageProfilesDiv i {
        margin-right: 10px;
    }

    .giveNetflixDiv {
        background-color: #2A2A2A;
        padding: 15px 10px;

    }

    .giveHeader {
        color: white;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .giveHeader i {
        font-size: 20px;
        margin-right: 5px;
    }

    .shareSpan {
        color: white;
        font-size: 13px;
    }

    .giveNetflixDiv a {
        color: #555555;
        font-size: 12px;
    }

    .linkDiv {
        background-color: black;
        border-radius: 4px;
        margin: 8px 2px;
        padding: 4px 4px;

    }

    .linkDiv span {
        color: white;
        font-size: 12px;
    }

    .copyButton {
        background-color: white;
        padding: 5px 7px;
        border-radius: 3px;
    }

    .copyButton span {
        color: black;
        font-weight: 500;
    }

    .referDiv {
        border: solid 2px white;
        border-radius: 2px;
        margin: 8px 2px;
        padding: 4px 4px;
        color: white;
        font-size: 18px;
    }

    .referDiv i {
        margin-left: 12px;
    }

    .optionsMenu {
        margin: 55px 0px 35px 0px;
    }

    .options {
        background-color: #171717;
        padding: 15px 20px;
    }

    .leftOptions {
        color: #767676;
    }

    .leftOptions i {
        margin-right: 10px;
    }

    .rightOptions {
        color: #5F5F5F;
    }

    .signOutSpan {
        color: #B4B4B4;
        margin-bottom: 5px;
    }

    .versionSpan {
        color: #4B4B4B;
        margin-bottom: 90px;
    }
</style>
