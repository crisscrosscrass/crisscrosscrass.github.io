var collectJiraInfo = {data: {
    filterIdea:values[0][5],
    requester:values[0][1],
    country:values[0][2],
    requestType:values[0][3],
    styleTLC:values[0][6],
    listOfAttributes:values[0][16],
    masterTagIds:values[0][17],
    finalDecisionTagType:values[0][18],
    tagTypeIndexability:values[0][19],
    commentNote:values[0][20],
    filterMember:values[0][14],
  }}
var jiraTemplate = `
https://visualmeta.atlassian.net/secure/CreateIssueDetails!init.jspa?
pid=12102&issuetype=10001
&assignee=${collectJiraInfo.data.requester}
&reporter=${collectJiraInfo.data.filterMember}
&summary=Filter+idea+${collectJiraInfo.data.filterIdea}
&description=Dear+QM+Jedi!%0A%0AHints+and+Links+for+your+filter+creation:%0A%0A
a+guideline+on+how+to+add+a+filter+here+→+[How+to+create+filters?|https://visualmeta.atlassian.net/wiki/spaces/QM/pages/1821671868/How+to+create+filters+for+Country+Teams]%0A
a+guideline+on+how+to+use+multiple+creation+tool+here+→+[Multi-creation|https://visualmeta.atlassian.net/wiki/spaces/QM/pages/791248929/Multi-creation]%0A please+remember+to+check+Validation+9.2+after+creating+each+filter%0A
make+sure+the+URL+is+reusable+-+meaning,+the+filter+could+also+be+applied+to+other+TLCs+in+the+future%0A%0A

Type+of+request:+${collectJiraInfo.data.requestType}%0A
Style+/+TLC:+${collectJiraInfo.data.styleTLC}%0A
List+of+attributes:+${collectJiraInfo.data.listOfAttributes}%0A
Master+tag+ids:+${collectJiraInfo.data.masterTagIds}%0A
Tag+type:+${collectJiraInfo.data.finalDecisionTagType}%0A
Tag+type+indexability:+${collectJiraInfo.data.tagTypeIndexability}%0A
Comment+/+Notes:+${collectJiraInfo.data.commentNote}%0A%0A%0A
+Acceptance+criteria+%0A (x)+
CatUrlStructure+is+updated+with+new+tag+types​%0A
(x)+All+attributes+are+created+in+the+back+office​%0A
(x)​+Validation+Report+is+clean+of+new+filter+related+errors​%0A
(x)​+Stems+are+added​%0A
(x)+All+attributes+are+cleaned/samples+are+added​%0A
(x)​+Naming+templates+are+adapted​%0A
(x)+Mail+to+SEO+sent+two+days+before+filter+goes+live​%0A
(x)​+All+attributes+are+added+to+the+rules​%0A
(x)+All+filter+attributes+are+visible+in+FE​%0A
(x)​+Filter+attributes+are+added+to+weekly+new+tags+sheet+[here|https://docs.google.com/spreadsheets/d/1yybDSqrUdmoaDYUkkIGx6jn0gXY7iUbCDosOr-SZers/edit%23gid=120082775]
&customfield_12103=${collectJiraInfo.data.country}`;




function getJiraUserBy(email) {
  // Basic Rest API v3 User Search
  // https://visualmeta.atlassian.net/rest/api/3/user/search?query=clarisse.pieter
  let selection = {
      "nicole.arndt@visual-meta.com": "557058:da179952-cb1f-449d-ae8a-30a47db13af6",
      "samantha.lallement@visual-meta.com": "557058:e263e799-f280-4ae7-a9f1-0b184148a22e",
      "tim.kruisman@visual-meta.com": "557058:8d77b70c-8d7c-4b88-828e-39b3c3dbe8ba",
      "josephine.pretzsch@visual-meta.com": "557058:e71fa32b-3f96-4b6a-96dd-1f39d862a2cb",
      "tamiris.diversi@visual-meta.com": "557058:57eff30a-9916-4ef1-a505-a35dd734c5bf",
      "francesca.decesare@visual-meta.com": "5bab2700a9b7466be32ad9b9",
      "maria.lopez@visual-meta.com": "5b3485a2fa7c4336fcbda0cf",
      "katja.klimzeck@visual-meta.com": "557058:1d65c9fd-c1f7-4136-a2e2-6786dba452f5",
      "debbie.ty@visual-meta.com": "557058:daa0ca7f-426e-49af-b1a4-0f80348528a2",
      "julia.nystroem@visual-meta.com": "5a841d9f4f6e9336193a5fd6",
      "tom.kowalkowski@visual-meta.com": "557058:55175997-274a-4a17-af19-288d5e77d5fd",
      "yvonne.mueller@visual-meta.com": "557058:5a09f191-bb94-4bdc-8fdf-a33cb3d4ebbd",
      "gary.siewert@visual-meta.com": "557058:27691edf-3d09-4221-93c4-635b8894c75b",
      "kerstin.sax@visual-meta.com":"57058:a89d1fe9-d969-47b6-b334-e0f0691941b7",
      "tamara.jurack@visual-meta.com":"557058:3cfcb50f-a00e-44ca-897a-e980d80554a1",
      "tom.boehme@visual-meta.com":"5b45b0d5845e7e2cdff757dd",
      "dominika.srnakova@visual-meta.com":"557058:dafc04a5-d9db-4d78-910b-431167f408d4",
      "felix.boehme@visual-meta.com":"5f217b988b83b7002941f7fe",
      "julia.froemming@visual-meta.com":"557058:667b4a4b-3986-4152-8aaf-68c9215c609c",
      "elisa.fahrenholz@visual-meta.com":"557058:ffbc30ec-941f-4fb6-b671-2965b3ff20d2",
      "johanna.krug@visual-meta.com":"557058:7563342d-a6b3-41b1-8e2e-f7532839ff46",
      "robert.karrer@visual-meta.com":"557058:52cf0ed6-f641-4033-9be2-6201b6630bd9",
      "alan.ali@visual-meta.com":"5f5b549f662e2d00767ec71e",
      "tereza.novosadova@visual-meta.com":"5b3485e5ddd2363f63053eb7",
      "libor.riska@visual-meta.com":"6023f624be86a000691b87fa",
      "zdenka.kelijova@visual-meta.com":"5faba24b71ab9e006a401640",
      "adrienn.gervein@visual-meta.com":"5ecceb51c9160f0c1d1d0ea5",
      "amanda.enoksson@visual-meta.com":"557058:d668aad2-b9e9-4742-a25f-019beb1376e2",
      "anna.johansson@visual-meta.com":"5fd0dbb6dbfd8d006813ce35",
      "pernille.petersen@visual-meta.com":"601162f1e3a14d0071dbc57c",
      "anne-maria.dyhrberg-roepcke@visual-meta.com":"5ae720ee7b44642d39d36751",
      "julia.uusitalo@visual-meta.com":"557058:73d80938-68fe-4b86-97f6-074615ad123a",
      "guillaume.leroy@visual-meta.com":"557058:46a08c5c-50a4-47c1-813f-101698294ac1",
      "luisa.ladino@visual-meta.com":"5f9aa922b45b2e007453487a",
      "sergio.caceres@visual-meta.com":"557058:7f766785-103f-4d8e-9d48-1b20394093e5",
      "justyna.wojcik@visual-meta.com":"557058:fbb72fdd-d47b-4636-adad-10a185bb1e37",
      "valeria.corso@visual-meta.com":"557058:f52ecaf7-6fe2-48f4-b9df-be1a7c3f2fbd",
      "fabrizio.pelaggi@visual-meta.com":"557058:dc3a0e87-fa76-4610-97fc-89ffb2fdf09d",
      "clarisse.pieter@visual-meta.com":"5f9aa6267cfc2400719d2368",
      "default": "notInList"
  }
  return (selection[email] || selection['default']);
}