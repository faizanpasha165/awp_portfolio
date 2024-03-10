window.onload = function() {
    const experienceOne = document.getElementById('experienceOne');
    const dropdownIconOne = document.getElementById('dropdownIconOne');
    const dropdownContentOne = document.getElementById('dropdownContentOne');

    experienceOne.addEventListener('click', function () {
        toggleDropdown(dropdownIconOne, dropdownContentOne);
    });

    const experienceTwo = document.getElementById('experienceTwo');
    const dropdownIconTwo = document.getElementById('dropdownIconTwo');
    const dropdownContentTwo = document.getElementById('dropdownContentTwo');

    experienceTwo.addEventListener('click', function () {
        toggleDropdown(dropdownIconTwo, dropdownContentTwo);
    });

    const experienceThree = document.getElementById('experienceThree');
    const dropdownIconThree = document.getElementById('dropdownIconThree');
    const dropdownContentThree = document.getElementById('dropdownContentThree');

    experienceThree.addEventListener('click', function () {
        toggleDropdown(dropdownIconThree, dropdownContentThree);
    });
    
    // Open the first dropdown by default
    toggleDropdown(dropdownIconOne, dropdownContentOne);
};

function toggleDropdown(dropdownIcon, dropdownContent) {
    dropdownIcon.classList.toggle('rotate');
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
}
