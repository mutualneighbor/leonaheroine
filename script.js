document.addEventListener('DOMContentLoaded', function () {
    // 모든 탭 링크와 콘텐츠 패널을 가져옵니다.
    const tabs = document.querySelectorAll('.nav-link');
    const contentPanels = document.querySelectorAll('.content-panel');

    // 각 탭 링크에 클릭 이벤트를 추가합니다.
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            // a 태그의 기본 동작(페이지 이동 등)을 막습니다.
            event.preventDefault();

            // 1. 모든 탭에서 'active' 클래스 제거
            tabs.forEach(item => item.classList.remove('active'));
            
            // 2. 클릭된 탭에만 'active' 클래스 추가
            this.classList.add('active');

            // 3. 모든 콘텐츠 패널에서 'active' 클래스 제거 (숨김)
            contentPanels.forEach(panel => panel.classList.remove('active'));

            // 4. 클릭된 탭과 연결된 콘텐츠 패널을 찾아 'active' 클래스 추가 (보여줌)
            const targetPanelId = this.getAttribute('data-target');
            const targetPanel = document.querySelector(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
