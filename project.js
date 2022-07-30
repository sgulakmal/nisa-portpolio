var selectedProjectType = '0';
var projects = [{ name: 'Spitfire', discription: 'Web Application', id: 1, category: 2 }, // category: 2 - web
{ name: 'Web Quote', discription: 'Web Application', id: 2, category: 2 }, // category: 2 - web
{ name: 'TNR App', discription: 'Mobile App', id: 3, category: 3 }, // category: 3 - mobile
{ name: 'Siyan', discription: 'Inventory Controlor', id: 4, category: 4 }, // category: desctop - web
{ name: 'Fire', discription: 'Web site', id: 5, category: 2 },
{ name: 'POS', discription: 'Web base Inventory Controlor', id: 6, category: 2 }
]

setProjectToView(1);

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
            <div class="button w3-animate-bottom" id="project-more-${i.id}">LEARN MORE</div>
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