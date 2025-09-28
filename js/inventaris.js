// Modal functionality
const modal = document.getElementById('modal-barang');
const btnTambah = document.getElementById('btn-tambah');
const btnTutup = document.getElementById('btn-tutup');
const btnBatal = document.getElementById('btn-batal');
const formBarang = document.getElementById('form-barang');

// Open modal
btnTambah.addEventListener('click', function() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    formBarang.reset();
}

btnTutup.addEventListener('click', closeModal);
btnBatal.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Form submission
formBarang.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(formBarang);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send data to server
    console.log('Data barang:', data);
    
    // Show success message
    alert('Data barang berhasil disimpan!');
    closeModal();
});

// Filter functionality
const filterKategori = document.getElementById('filter-kategori');
const filterKondisi = document.getElementById('filter-kondisi');
const filterLokasi = document.getElementById('filter-lokasi');

function applyFilters() {
    const kategori = filterKategori.value;
    const kondisi = filterKondisi.value;
    const lokasi = filterLokasi.value;
    
    // Here you would typically filter the table data
    console.log('Applying filters:', { kategori, kondisi, lokasi });
}

filterKategori.addEventListener('change', applyFilters);
filterKondisi.addEventListener('change', applyFilters);
filterLokasi.addEventListener('change', applyFilters);

// Edit button functionality
document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.cells[0].textContent;
        const nama = row.cells[1].textContent;
        
        // Here you would populate the modal with existing data
        document.getElementById('modal-title').textContent = `Edit Barang: ${nama}`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        console.log('Editing item:', id);
    });
});

// Delete button functionality
document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.cells[0].textContent;
        const nama = row.cells[1].textContent;
        
        if (confirm(`Apakah Anda yakin ingin menghapus barang "${nama}"?`)) {
            // Here you would send delete request to server
            console.log('Deleting item:', id);
            row.remove();
        }
    });
});

// Export functionality
document.getElementById('btn-export').addEventListener('click', function() {
    // Here you would implement export functionality
    alert('Fitur export data akan diimplementasikan!');
});