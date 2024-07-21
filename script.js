document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các nút có class faq-icon
    const faqButtons = document.querySelectorAll('.faq-icon');
    
    // Thêm sự kiện click vào mỗi nút
    faqButtons.forEach(button => { //vòng lặp của js
      button.addEventListener('click', function () {
        // Lấy phần tử cha của nút được click
        const faqHead = button.closest('.FAQ-head');
        
        // Tìm phần tử dropdown bên trong phần tử cha
        const dropdown = faqHead.querySelector('.dropdown');
        
        // Thay đổi class open để hiển thị hoặc ẩn nội dung
        dropdown.classList.toggle('open'); //Nếu có lớp open thì xóa, nếu không thì thêm vào
        button.classList.toggle('open');
      });
    });
  });
  