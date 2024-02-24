let listBooks = JSON.parse(localStorage.getItem("books")) || [];
let filterBooks = listBooks.filter((item) => {
  return item.status == "Belum Selesai";
});

function addBook() {
  let judul = document.getElementById("title-book").value;
  let penulis = document.getElementById("creator-book").value;
  let tahun = document.getElementById("rilis-book").value;
  let status = "Belum Selesai";
  listBooks.push({
    judul,
    penulis,
    tahun,
    status,
  });
  saveBook();
  alert("Berhasil Menambahkan!!");
}

function saveBook() {
  localStorage.setItem("books", JSON.stringify(listBooks)); // array object diubah menjadi string
}

function showBooks() {
  let list = ``;
  for (let i = 0; i < filterBooks.length; i++) {
    list += ` 
         <div class="card border border-1 mb-2">
        <div class="card-body ">
        <h5 class="card-title m-">Judul : ${filterBooks[i].judul}</h5>
        <p class="card-text m-0">Penulis : ${filterBooks[i].penulis}</p>
        <p class="card-text m-0">Tahun : ${filterBooks[i].tahun}</p>
        <p class="card-text">Status : ${filterBooks[i].status}</p>
    
        <a href="" onclick="selesaiBaca('${filterBooks[i].judul}')" class="btn btn-success">Selesai Baca</a>
        <a href="" onclick="hapusBuku('${filterBooks[i].judul}')" class="btn btn-danger">Hapus Buku</a>
        </div>
        </div>`;
  }
  document.getElementById("card-book").innerHTML = list;
}
function hapusBuku(judul) {
  let findIndexBook = listBooks.findIndex((item) => item.judul == judul);
  listBooks.splice(findIndexBook, 1);
  saveBook();
  alert("Berhasil Hapus Buku!!");
}
function selesaiBaca(judul) {
  let findIndexBook = listBooks.findIndex((item) => item.judul == judul);
  listBooks[findIndexBook].status = "Selesai";
  saveBook();
  alert("Berhasil Update Buku!!");
}
// function cariBuku() {
//   let input = document.getElementById("inputcari").value;

//   let filter = [];
//   let findBook = listBooks.filter((data) => {
//     let newjudul = data.judul;

//     var matches = newjudul.indexOf(input) >= 0 ? true : false;
//     if (matches) {
//       //do something
//       filter.push();
//     }
//   });

//   console.log(findBook);
// }

if (listBooks.length > 0) {
  showBooks();
}
