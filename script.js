// 付安羽个人网站交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            
            // 设置每个链接的样式
            document.querySelectorAll('.nav-links li').forEach(item => {
                item.style.margin = '10px 0';
                item.style.width = '100%';
                item.style.textAlign = 'center';
            });
        });
    }
    
    // 视频控制
    const beachVideo = document.getElementById('beachVideo');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    
    if (playBtn && beachVideo) {
        playBtn.addEventListener('click', function() {
            beachVideo.play();
        });
    }
    
    if (pauseBtn && beachVideo) {
        pauseBtn.addEventListener('click', function() {
            beachVideo.pause();
        });
    }
    
    if (muteBtn && beachVideo) {
        muteBtn.addEventListener('click', function() {
            if (beachVideo.muted) {
                beachVideo.muted = false;
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> 静音';
            } else {
                beachVideo.muted = true;
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> 取消静音';
            }
        });
    }
    
    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // 简单的表单验证
            if (!name || !email || !message) {
                alert('请填写所有字段！');
                return;
            }
            
            // 模拟表单提交
            alert(`感谢 ${name} 的消息！我会尽快回复您。`);
            
            // 清空表单
            contactForm.reset();
        });
    }
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 100, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 100, 0.1)';
        }
    });
    
    // 滚动到顶部时隐藏移动菜单
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});