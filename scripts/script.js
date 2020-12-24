document.addEventListener('DOMContentLoaded', () => {
  //==================TABS=======================
  const tabs = [
    document.getElementById('tab_01'),
    document.getElementById('tab_02'),
    document.getElementById('tab_03')
  ]
  const links = [
    document.getElementById('tab-link_01'),
    document.getElementById('tab-link_02'),
    document.getElementById('tab-link_03')
  ]

  const showTab = ({ target }) => {
    const id = parseInt(target.id[target.id.length - 1]) - 1

    if (links[id].classList.contains('disabled')) return null

    links.forEach((link) => link.classList.remove('active'))
    tabs.forEach((tab) => (tab.style.display = 'none'))

    links[id].classList.add('active')
    tabs[id].style.display = 'block'
  }

  links.forEach((link) => link.addEventListener('click', showTab))

  //==================SHOW ADS=======================

  const leftAds = document.querySelector('cf-left-game-cont')
  const rightAds = document.querySelector('cf-right-game-cont')
  const bottomAds = document.querySelector('.footer_ads > cf-ads-block')
  const game = document.querySelector('cf-game-cont')

  const chackSize = () => {
    leftAds.style.display = 'inline-block'
    rightAds.style.display = 'inline-block'
    bottomAds.style.width = '750px'

    let size = leftAds.offsetWidth + rightAds.offsetWidth + game.offsetWidth
    if (size > window.innerWidth) leftAds.style.display = 'none'
    size = rightAds.offsetWidth + game.offsetWidth
    if (size > window.innerWidth) {
      rightAds.style.display = 'none'
      bottomAds.style.width = '100%'
    }
  }

  chackSize()
  window.addEventListener('resize', chackSize)
})
