function recherche(){
    let searchbar = document.getElementById("searchbar").value;
    searchbar = searchbar.toLowerCase();
    let x = document.getElementsByClassName("magasin");

    for (i = 0 ; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(searchbar)){
            x[i].style.display ="none";

        }
       else {
        x[i].style.display = "list-item";
       }
    }
}