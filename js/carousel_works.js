document.addEventListener('DOMContentLoaded', () => {
    const rightArea = document.querySelector('.rightArea');
    const images = [
        "https://scontent.ftpe9-1.fna.fbcdn.net/v/t39.30808-6/614973132_1228619779149536_2480884644601288368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=axpomv5-Gy8Q7kNvwELsT2h&_nc_oc=Adq6RmRsgk-CxZxNM-nO3ulR0vgo5TuXblnJhkmMbNGhyXzjyQ5FAsiAyK79iAfAKJs&_nc_zt=23&_nc_ht=scontent.ftpe9-1.fna&_nc_gid=FJTwFedoLv5vk_ScxaGHQw&_nc_ss=7b2a8&oh=00_Af5s5xx1ZGIGOn5a7SGexFiC4YEGb620lBp9ku8cDEU0Bg&oe=69FB32BD",
        "https://f2.toyhou.se/file/f2-toyhou-se/images/98019376_04T3GleBHWr5X4t.png",
        "https://pbs.twimg.com/media/GUE3vm8agAAy0N6?format=jpg&name=large"
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
