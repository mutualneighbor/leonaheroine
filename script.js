document.addEventListener('DOMContentLoaded', function () {
    // --- 탭 전환 기능 ---
    const tabs = document.querySelectorAll('.nav-link');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            contentPanels.forEach(panel => panel.classList.remove('active'));

            const targetPanelId = this.getAttribute('data-target');
            const targetPanel = document.querySelector(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- 팔로우 버튼 토글 기능 추가 ---
    const followBtn = document.querySelector('.follow-btn');

    followBtn.addEventListener('click', function() {
        // 'following' 클래스를 토글 (있으면 제거, 없으면 추가)
        this.classList.toggle('following');

        // 클래스 존재 여부에 따라 텍스트 변경
        if (this.classList.contains('following')) {
            this.textContent = '팔로잉';
        } else {
            this.textContent = '팔로우';
        }
    });
});
