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

  const leftAds = document.querySelector('.ads__left_container')
  const rightAds = document.querySelector('.ads__right_container')
  const bottomAds = document.querySelector('.footer_ads')
  const game = document.querySelector('.game__content')

  const chackSize = () => {
    leftAds.style.display = 'inline-block'
    rightAds.style.display = 'inline-block'

    let size = leftAds.clientWidth + rightAds.clientWidth + game.clientWidth + 7
    if (size >= document.body.clientWidth) leftAds.style.display = 'none'

    size = rightAds.offsetWidth + game.offsetWidth + 7
    if (size >= document.body.clientWidth) rightAds.style.display = 'none'

    // if (document.body.clientWidth > 720) bottomAds.style.width = document.body.clientWidth
  }

  chackSize()
  window.addEventListener('resize', chackSize)
})
