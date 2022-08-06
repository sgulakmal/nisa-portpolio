var selectedProjectType = '0';
var projects = [{ name: 'UNDERGRADUATE', discription: 'Bachelor of information and communication technology', id: 1, category: 2 }, // category: 2 - EDUCATION
{ name: 'Diploma', discription: 'Computer Application & Business Management', id: 2, category: 2 }, // category: 2 - EDUCATION
{ name: 'Diploma', discription: 'Computer based languages', id: 3, category: 2 }, // category: 2 - EDUCATION
{ name: 'G.C.E. A/L', discription: '2016 (Technology Stream)', id: 4, category: 2 }, // category: 2 EDUCATION
{ name: 'Research Project', discription: 'Final Year Research Project (Ongoing)', id: 5, category: 3 }, // category: 3 PROJECT
{ name: 'Shopping system', discription: 'using consumer behaviors prediction (Group Project)', id: 6, category: 3 }, // category: 3 PROJECT
{ name: 'Mobile App', discription: 'Tourism management system)', id: 7, category: 3 }, // category: 3 PROJECT
{ name: 'POS system', discription: 'Billing system (Group project))', id: 8, category: 3 }, // category: 3 PROJECT
{ name: 'Project', discription: 'Project of diploma in computer based application', id: 9, category: 3 }, // category: 3 PROJECT
{ name: 'Full stack developer', discription: 'Trainee course (Started), University of Moratuwa', id: 10, category: 4 }, // category: 4 SUPPORTIVE
{ name: 'User experience', discription: 'Digital Skills: User experience, Online Course -Future Learn', id: 11, category: 4 }, // category: 4 SUPPORTIVE
{ name: 'Web Fundamental', discription: 'HTML, CSS, JavaScript Fundamental course – Solo Learn (2020)', id: 12, category: 4 }, // category: 4 SUPPORTIVE
{ name: 'Networking', discription: 'Packet Tracer – Cisco networking Academy (2021)', id: 13, category: 4 }, // category: 4 SUPPORTIVE
{ name: 'Karate', discription: 'Member Of University Karate team', id: 14, category: 5 }, // category: 5 EXTRA
{ name: 'Food products', discription: 'Food products processing Technology - Cathy rich food processing center', id: 15, category: 5 }, // category: 5 EXTRA

]

selectProjectCatogory(2);

function selectProjectCatogory(index) {
    if (selectedProjectType === index) {
        return;
    }
    selectedProjectType = index;
    setProjectToView(index);
    // var menu = document.getElementById('menu-nave');
    for (var i = 1; i < 5; i++) {
        var item = document.getElementById('project-type' + i);
        if (i === index) {
            item.classList.add("w3-animate-zoom");
        } else {
            item.classList.remove("w3-animate-zoom");
        }
    }
}

function setProjectToView(selectType) {
    var temList = projects;
    var list = '';
    if (selectType !== 1) {
        temList = projects.filter(i => i.category === selectType);
    }
    var viwer = document.getElementById('gallery');
    temList.forEach(i => {
        list = list + `
        <div class="card galary-image" id="gallery-i${i.id}" onmouseenter="showDetails(${i.id})" onmouseleave="showImage(${i.id})">
            <img class="w3-animate-zoom" src="images/projects/project-${i.id}.png" style="width: 280px; height:280px">
            <div class="text w3-animate-top">
                <div class="bold">${i.name}</div>
                <span class="highlight">${i.discription}</span>
            </div>
      </div>`;
    });

    viwer.innerHTML = list;

}

function showDetails(itemId) {
    var item = document.getElementById('gallery-i' + itemId);
    item.classList.remove("galary-image");
    item.classList.add("galary-detail");
}

function showImage(itemId) {
    var item = document.getElementById('gallery-i' + itemId);
    item.classList.remove("galary-detail");
    item.classList.add("galary-image");
}