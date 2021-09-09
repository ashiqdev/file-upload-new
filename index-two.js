$('.pause').click(function () {
  $('.pause').addClass('button-clicked');
});

$('.cross').click(function () {
  $('.cross').addClass('button-clicked');
});

document.addEventListener('click', (e) => {
  if (!e.target.matches('.pause')) {
    document.querySelector('.pause').classList.remove('button-clicked');
  }

  if (!e.target.matches('.cross')) {
    document.querySelector('.cross').classList.remove('button-clicked');
  }
});

$('.checkbox1').change(function () {
  if (this.checked) {
    //Do stuff
    $('.password-text').css('visibility', 'visible');
  } else {
    $('.password-text').css('visibility', 'hidden');
  }
});

$('.checkbox2').change(function () {
  if (this.checked) {
    //Do stuff
    $('.expiry-select-one').css('visibility', 'visible');
    $('.expiry-select-two').css('visibility', 'visible');
    $('.or').css('visibility', 'visible');
  } else {
    $('.expiry-select-one').css('visibility', 'hidden');
    $('.expiry-select-two').css('visibility', 'hidden');
    $('.or').css('visibility', 'hidden');
  }
});

$(document).ready(function () {
  if ($(window).width() <= 375) {
    $('.checkbox2').css('margin-top', '-70px');
    $('.checkbox2').change(function () {
      if (this.checked) {
        //Do stuff
        $('.checkbox2').css('margin-top', '30px');
      } else {
        $('.checkbox2').css('margin-top', '-70px');
      }
    });
  }
});

// modals

const modal2 = document.querySelector('.m-modal2');
const modal3 = document.querySelector('.m-modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const closeme = document.querySelector('.close-me');
const setting = document.querySelector('.set-ing');
const history = document.querySelector('.history');

console.log({ history });

const closeModal = () => {
  overlay.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
};

const closeExpiryModal = () => {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeHistoryModal = () => {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openExpiryModal = () => {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // $('.datepicker').datepicker();
};

const openHistoryModal = () => {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnCloseModal.addEventListener('click', () => {
  console.log('clicked');
  closeModal();
});

closeme.addEventListener('click', closeHistoryModal);

setting.addEventListener('click', () => {
  openExpiryModal();
});

history.addEventListener('click', () => {
  console.log('hello');
  openHistoryModal();
});

overlay.addEventListener('click', closeModal);

// pagination demo

const btns = document.querySelectorAll('.pageNumber');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    // change the active button

    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.classList += ' active';

    // change the content with animation
    console.log(this.textContent);
    if (this.textContent.trim() === '2') {
      

      const newText = `
      <div class="file-information-container">
           
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>test2.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>4/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>new2.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>4/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file2.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>4/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file2.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>4/2/2021</span>
      </p>
    </div>
      
      `;

      $('.file-information-wrapper').fadeOut(300, function() {
        $(this).html(newText).fadeIn(300);
      })

      
    } else if (this.textContent.trim() === '1') {
      
      const newText = `
      <div class="file-information-container">
           
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>test.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>3/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>new.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>3/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>3/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>3/2/2021</span>
      </p>
    </div>
      
      `;

     $('.file-information-wrapper').fadeOut(300, function() {
        $(this).html(newText).fadeIn(300);
      })


    } else if (this.textContent.trim() === '3') {

      const newText = `
      <div class="file-information-container">
           
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>test3.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>5/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>new3.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>5/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file3.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>5/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file3.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>5/2/2021</span>
      </p>
    </div>
      
      `;

      $('.file-information-wrapper').fadeOut(300, function() {
        $(this).html(newText).fadeIn(300);
      })
      
    } else if (this.textContent.trim() === '4') {
      const newText = `
      <div class="file-information-container">
           
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>test4.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>6/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>new4.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>6/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file4.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>6/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file4.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>6/2/2021</span>
      </p>
    </div>
      
      `;

       $('.file-information-wrapper').fadeOut(300, function() {
        $(this).html(newText).fadeIn(300);
      })
    
    
    } else if (this.textContent.trim() === '5') {
      const newText = `
      <div class="file-information-container">
           
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>test6.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>7/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>new6.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>7/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file5.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>7/2/2021</span>
      </p>
    </div>

    <div class="file-information-container">
      <p class="file-information-name">  <span class="material-icons des-icon">
        description
        </span>
        <span>file5.zip</span>
      </p>

      <p class="file-information-date">  <span class="material-icons file-icon">
        schedule
        </span>
        <span>7/2/2021</span>
      </p>
    </div>
      
      `;

      $('.file-information-wrapper').fadeOut(300, function() {
        $(this).html(newText).fadeIn(300);
      })

    }
  });
}
