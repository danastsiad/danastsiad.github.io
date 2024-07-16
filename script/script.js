document.addEventListener('DOMContentLoaded', () => {
    const progressChart = document.getElementById('progress-chart');
    const progressBar = document.getElementById('progress-bar');
    const valueInput = document.getElementById('value');
    const animateToggleSwitch = document.getElementById('animate');
    const hideToggleSwitch = document.getElementById('hide');
    const progressStrokeColor = '#005CFF';

    function setValue(value) {
        const clampValue = Math.min(100, Math.max(0, value));
        valueInput.value = clampValue;
        const circumference = 2 * Math.PI * 60;
        const result = circumference * (1 - clampValue / 100);
        progressBar.style.strokeDashoffset = result;

        if (clampValue > 0) {
            progressBar.style.stroke = progressStrokeColor;
        } else {
            progressBar.style.stroke = 'none';
        }
    }

    function setAnimate(animate) {
        animateToggleSwitch.checked = animate;
        if (animate) {
            progressChart.classList.add('animated');
        } else {
            progressChart.classList.remove('animated');
        }
    }

    function setHide(hide) {
        hideToggleSwitch.checked = hide;
        if (hide) {
            progressChart.classList.add('hidden');
        } else {
            progressChart.classList.remove('hidden');
        }
    }

    valueInput.addEventListener('input', () => {
        setValue(valueInput.value);
    });

    animateToggleSwitch.addEventListener('change', () => {
        setAnimate(animateToggleSwitch.checked);
    });

    hideToggleSwitch.addEventListener('change', () => {
        setHide(hideToggleSwitch.checked);
    });
    
    window.progressBlockAPI = {
        setValue,
        setAnimate,
        setHide
    };
});
