var selectSection = 1;
var skills = [{
        name: 'HTML',
        level: 40
    },
    {
        name: 'HTML',
        level: 40
    },
    {
        name: 'JavaScript',
        level: 40
    },
    {
        name: 'SQL',
        level: 30
    },
    {
        name: 'C',
        level: 30
    },
    {
        name: 'C#',
        level: 30
    }
]

var openMobileMenu = false;

selectMenuItem(1);
addSkills()


function onLoadPage() {
    document.body.scrollTop = 0;
}


function selectMenuItem(index) {
    // if (selectSection === index) {
    //     document.getElementById("section-1").scrollIntoView();
    //     return;
    // }
    selectSection = index;
    var menu = document.getElementById('menu-nave');
    for (var i = 1; i < 5; i++) {
        var item = document.getElementById('nav-bar-i' + i);
        if (index === 1) {
            menu.classList.remove("fixed-menu");
        } else {
            menu.classList.add("fixed-menu");
        }
        if (i === index) {
            item.classList.add("active");
            var elmnt = document.getElementById("section-" + i);
            elmnt.classList.remove("notloading");
            elmnt.scrollIntoView();

        } else {
            item.classList.remove("active");
        }
    }

    // Mobile
    if (index > 1) {
        document.getElementById('body').classList.add('details_section');
    } else {
        document.getElementById('body').classList.remove('details_section');
    }
    if (!!openMobileMenu) {
        openCloseMobileMenu();
    }




}

function addSkills() {
    var allSkills = ''
    var skillsWrap = document.getElementById('skill-wrap');

    skills.forEach(i => {
        allSkills = allSkills + `<div class="bar flex">
        <div class="bar fill" style="width:${i.level}%">
            <div class="tag bold flex">${i.name}</div>
        </div>
        <span>${i.level}%</span>
    </div> `
    });
    skillsWrap.innerHTML = allSkills;
}

function openCloseMobileMenu() {
    if (!!openMobileMenu) {
        document.getElementById('menu-nave').style.display = 'none';
    } else {
        document.getElementById('menu-nave').style.display = 'block';
    }
    openMobileMenu = !openMobileMenu

}