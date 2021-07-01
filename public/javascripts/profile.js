window.addEventListener('DOMContentLoaded', () => {
    let currBtn = document.getElementById('current');
    let playedBtn = document.getElementById('played');
    let wantBtn = document.getElementById('want');

    currBtn.addEventListener('click', (e) => {
        location.assign(`/profile/${user.id}/currently_playing`)
    })
})
