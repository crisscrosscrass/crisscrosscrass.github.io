javascript: (() => {
  if (document.getElementById("ToolbarID")) {
    window.scrollTo(0, 0);
    return;
  }

  const menus = [
    {
      title: "HSH",
      links: [
        [
          "Organigramm",
          "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=21037066",
        ],
        [
          "Räume",
          "https://confluence.hsh-berlin.com/display/HSH/HSH+-+Raumbelegung",
        ],
        [
          "Telefonliste",
          "https://confluence.hsh-berlin.com/display/THM/Telefonliste",
        ],
        [
          "Geburtstagsliste",
          "https://confluence.hsh-berlin.com/display/THM/Geburtstagsliste",
        ],
        [
          "Entwicklung",
          "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=48565690",
        ],
        [
          "Wochenplan - FV",
          "https://confluence.hsh-berlin.com/display/BER/Wochenplan+FV-Entwickler+-+Anwesenheit",
        ],
        [
          "Wochenplan - Plattform",
          "https://confluence.hsh-berlin.com/display/BER/Anwesenheit+Plattform+Entwicklung",
        ],
        [
          "Abkürzungen und Begriffserklärungen",
          "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=66423095",
        ],
        ["VPN - Einwahl", "https://einwahl.hsh-berlin.com/spog/welcome"],
        [
          "Serverübersicht (Plattform)",
          "https://confluence.hsh-berlin.com/spaces/PRD/pages/48563816/Server%C3%BCbersicht+Plattform",
        ],
        [
          "Serverübersicht (Testserver)",
          "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=35265541",
        ],
        [
          "VOIS-Auslieferungen - Planung",
          "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=47088721",
        ],
        [
          "VOIS|MESO Releaseplanung",
          "https://confluence.hsh-berlin.com/display/PRD/VOIS%7CMESO+-+Releaseplanung",
        ],
      ],
    },
    {
      title: "VOIS - DOCS",
      links: [
        [
          "VOIS - BASE",
          "https://docs.vois.org/org.vois.docs/latest/index.html",
        ],
        ["VOIS - SOURCE", "https://src.vois.org/"],
        ["VOIS - APIs", "https://doku.vois.org/vois/docs/index.php"],
        [
          "VOIS - ICONS",
          "https://doku.vois.org/vois/docs/hux/21.20/6/docs/pages/icons.html",
        ],
        [
          "VOIS - DESIGN",
          "https://design.vois.org/68467ede9/p/141737-benachrichtigungen/b/004561",
        ],
        [
          "VOIS - HUX",
          "https://doku.vois.org/vois/docs/hux/latest/6/docs/api/index.html",
        ],
        [
          "VOIS - VUX",
          "https://doku.vois.org/vois/docs/storybook/org.vois.base.ui.ng/index.html",
        ],
        ["VOIS - Nexus", "https://repo.vois.org/"],
        ["VOIS - Schulung", "https://schulung.vois.org/"],
        [
          "VOIS - Einrichten",
          "https://docs.vois.org/org.vois.docs/latest/getting_started/setup/getting_started_setup_eclipse.html",
        ],
        [
          "VOIS - Einrichten FV",
          "https://confluence.hsh-berlin.com/display/THM/VOIS+einrichten",
        ],
      ],
    },
    {
      title: "Tools",
      links: [
        ["Mail - Outlook", "https://webmail.hsh-berlin.com/"],
        ["Chat - Mattermost", "https://chat.vois.org/hsh/"],
        ["HSH - Newsblock", "https://info-box.hsh-berlin.com/"],
        ["HSH-CRM", "https://www.vois-crm.de/"],
        ["HSH-Guard", "http://intraweb.hsh-berlin.com/guard/"],
        ["HSH-VOIS|Auth", "https://auth.vois.org/"],
        ["HSH-Cloud", "https://cloud.hsh-berlin.com/"],
        ["HSH-Sicherheit", "https://elearning.sosafe.de/"],
        ["Confluence - Content", "https://confluence.hsh-berlin.com/"],
        ["Jira - Ticketsystem", "https://tickets.vois.org/"],
        ["Zammad - Ticketsystem", "https://zammad.hsh-berlin.com/"],
        ["Fisheye", "https://fisheye.hsh-berlin.com/"],
        ["Jenkins Build", "https://jenkins.hsh-berlin.com/view/VOIS/job/vois/"],
      ],
    },
    {
      title: "VOIS-Online",
      href: "https://confluence.hsh-berlin.com/pages/viewpage.action?pageId=77177159",
      links: [
        ["Meldewesen", "https://online.vois.org/meldewesen/"],
        ["Vois Online", "https://online.vois.org/voisonline/"],
        ["Angelkarte", "https://online.vois.org/angelkarte/"],
        ["Gewerbe", "https://online.vois.org/gewerbe/"],
      ],
    },
    {
      title: "Personal",
      href: "https://www.google.com/",
      links: [
        ["VOIS CRM", "https://www.vois-crm.de/default/login"],
        ["internes JIRA", "https://vm-jira.hsh-berlin.com/"],
        ["externes JIRA", "https://ticketsystem.hsh-berlin.com/login.jsp"],
        [
          "FV src - Meldewesen",
          "https://svn.hsh-berlin.com/vois/hsh-meldewesen/hsh-meldewesen/release/",
        ],
        [
          "FV src - Personaldokumente",
          "https://svn.hsh-berlin.com/vois/hsh-personaldokumente/hsh-personaldokumente/release/",
        ],
      ],
    },
  ];

  // Create dropdown menu
  const createDropdown = ({ title, href = "#", links }) => {
    const li = document.createElement("li");
    li.className = "dropdown";
    li.innerHTML = `
      <a href="${href}" class="dropbtn">${title}</a>
      <div class="dropdown-content">
        ${links.map(([text, url]) => `<a href="${url}">${text}</a>`).join("")}
      </div>
    `;
    return li;
  };

  const toolbar = document.createElement("div");
  toolbar.id = "ToolbarID";
  const ul = document.createElement("ul");

  menus.forEach((menu) => ul.appendChild(createDropdown(menu)));

  const closeBtn = document.createElement("li");
  closeBtn.className = "dropdown";
  closeBtn.id = "right";
  closeBtn.innerHTML = '<a href="#" class="dropbtn">Close</a>';
  closeBtn.onclick = () => {
    document.body.style.transform = "translateY(0px)";
    toolbar.remove();
  };
  ul.appendChild(closeBtn);

  toolbar.appendChild(ul);
  document.body.appendChild(toolbar);

  // Add CSS
  const style = document.createElement("style");
  style.id = "qmtoolbarStyleSheet";
  style.textContent = `
    #ToolbarID {z-index:5000;padding:0;position:absolute;top:-35px;width:100%;height:50px;font-family:"Open Sans",sans-serif;font-size:12px}
    #ToolbarID ul {list-style:none;margin:0;padding:0;overflow:hidden;background:#333}
    #ToolbarID li {float:left}
    #ToolbarID #right {float:right}
    #ToolbarID li a,#ToolbarID .dropbtn {display:inline-block;color:#fff;text-align:center;padding:14px 16px;text-decoration:none}
    #ToolbarID li a:hover,#ToolbarID .dropdown:hover .dropbtn {background:red}
    #ToolbarID li.dropdown {display:inline-block}
    #ToolbarID .dropdown-content {display:none;position:absolute;background:#f9f9f9;min-width:160px;box-shadow:0 8px 16px rgba(0,0,0,.2);z-index:1}
    #ToolbarID .dropdown-content a {color:#000;padding:12px 16px;text-decoration:none;display:block;text-align:left}
    #ToolbarID .dropdown-content a:hover {background:#f1f1f1}
    #ToolbarID .dropdown:hover .dropdown-content {display:block}
  `;
  document.head.appendChild(style);

  document.body.style.transform = "translateY(35px)";
  window.scrollTo(0, 0);
})();
