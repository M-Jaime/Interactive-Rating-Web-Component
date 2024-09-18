const card = document.querySelector('.card')

      const ratingState = document.querySelector('.rating__state')

      const thankYouState = document.querySelector('.thank-you__state')

      const ratingNumbers = document.querySelectorAll('.rating__numbers .number')

      const span = thankYouState.querySelector('span')

      const submitBtn = document.querySelector('.submit__btn')

      const closeBtn = ratingState.querySelector('.close__btn')

      submitBtn.classList.add('disabled')

      console.log(span);

      ratingNumbers.forEach((item, i) =>{
          item.onclick = ()=>{
              ratingNumbers.forEach(otherItem=>{
                submitBtn.classList.remove('disabled')
                otherItem.classList.remove('selected')
              })
              item.classList.add('selected')
          
              span.innerHTML = `
                You select ${i+1} out of ${ratingNumbers
                .length}
              `
              
          }
          submitBtn.onclick = ()=>{
              thankYouState.classList.add('open')
          }
      })
      closeBtn.onclick = ()=>{
        card.style.display = 'none'
      }
      