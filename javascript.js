const mahasiswa = document.querySelectorAll('#mahasiswa li');
const info = document.querySelector('.info');

const showInfo = (nama, nim, thn, jenis, prodi) => {
  info.innerHTML = `
    <h2>${nama}</h2>
    <p>NIM: ${nim}</p>
    <p>Tahun Masuk: ${thn}</p>
    <p>Jenis Kelamin: ${jenis}</p>
    <p>Jurusan: ${prodi}</p>
  `;
};

search.addEventListener('input', () => {
  const searchTerm = search.value.toLowerCase();
  mahasiswa.forEach(item => {
    const nama = item.textContent.toLowerCase();
    if (nama.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  // menghapus event listener jika sedang mencari nama mahasiswa lain
  search.removeEventListener('input', arguments.callee);
});


mahasiswa.forEach(item => {
  item.addEventListener('click', () => {
    const nama = item.textContent;
    const nim = item.getAttribute('data-nim');
    const thn = item.getAttribute('data-thn');
    const jenis = item.getAttribute('data-kelamin');
    const prodi = item.getAttribute('data-prodi');
    const img = document.createElement('img');
    img.src = `https://example.com/images/${nama}.jpg`;
    img.alt = nama;
    showInfo(nama, nim, thn, jenis, prodi);
    info.appendChild(img);
  });
});
