document.addEventListener('DOMContentLoaded', function () {
    const chefProfile = {
        name: "Chef John Doe",
        experience: "10 years of gourmet cooking",
        specialty: "Mediterranean and Fusion cuisine",
        contact: "contact@chefjohn.com"
    };

    const chefSection = document.getElementById('chef');
    chefSection.innerHTML = `
        <div class="chef-profile">
            <h3>${chefProfile.name}</h3>
            <p>Experience: ${chefProfile.experience}</p>
            <p>Specialty: ${chefProfile.specialty}</p>
            <p class="contact">Contact: ${chef
