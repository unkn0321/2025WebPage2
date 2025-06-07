document.addEventListener('DOMContentLoaded', () => {
    const rightArea = document.querySelector('.rightArea');
    const images = [
        "https://pbs.twimg.com/media/GTgIOPwbMAAvHXt?format=jpg&name=900x900",
        "https://f2.toyhou.se/file/f2-toyhou-se/images/87752917_INzgmRyEwzZtdll.png",
        "https://pbs.twimg.com/media/GIlAwJqbgAEqbIO?format=jpg&name=4096x4096"
    ];

    let currentIndex = 0;

    // 創建控制按鈕
    const createControls = () => {
        const prevBtn = document.createElement('button');
        const nextBtn = document.createElement('button');
        
        prevBtn.className = 'carousel-btn prev-btn';
        nextBtn.className = 'carousel-btn next-btn';
        
        prevBtn.innerHTML = '&#10094;'; // 左箭頭
        nextBtn.innerHTML = '&#10095;'; // 右箭頭
        
        rightArea.appendChild(prevBtn);
        rightArea.appendChild(nextBtn);
        
        return { prevBtn, nextBtn };
    };

    // 更新背景圖片
    const updateImage = (index) => {
        rightArea.style.backgroundImage = `url(${images[index]})`;
    };

    // 切換到下一張圖片
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    };

    // 切換到上一張圖片
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    };

    // 初始化輪播
    const initCarousel = () => {
        const { prevBtn, nextBtn } = createControls();
        
        // 綁定按鈕事件
        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
        
        // 自動輪播
        setInterval(nextImage, 5000);
        
        // 設定初始圖片
        updateImage(currentIndex);
    };

    initCarousel();
});