export const ORGANIZATION_TAGLINE = 'Holistic Healing Grace';

export const scriptures = [
  {
    ref: 'Marcos 16:18',
    refEn: 'Mark 16:18',
    text: '"...ipapatong nila ang kanilang mga kamay sa mga may sakit, at sila\'y magsisigaling."',
  },
  {
    ref: 'Jeremias 17:14',
    refEn: 'Jeremiah 17:14',
    text: '"Pagalingin mo ako, O Panginoon, at ako\'y gagaling..."',
  },
  {
    ref: 'Lucas 4:40',
    refEn: 'Luke 4:40',
    text: '"...ipinatong niya ang kaniyang mga kamay sa bawat isa sa kanila, at pinagaling sila."',
  },
] as const;

export const content = {
  en: {
    visionLabel: 'Vision',
    missionLabel: 'Mission',
    coreBeliefLabel: 'Core belief',
    scriptureLabel: 'Scripture',
    vision:
      'To be a compassionate center of holistic healing, prayer, and wellness where individuals experience God\'s love, grace, and restoration of body, mind, and spirit. We envision a community strengthened by faith, hope, and the healing power of the Lord, recognizing that all healing comes from God alone.',
    mission:
      'Our mission is to provide holistic care through prayer, spiritual support, the laying on of hands, and natural wellness practices inspired by the healing ministry of Jesus Christ and His apostles. We serve as humble instruments of God\'s grace, offering compassionate care to those seeking physical, emotional, mental, and spiritual well-being. Through faith, service, and love, we aim to bring comfort, encouragement, and hope while giving all glory and honor to God, the true source of healing.',
    coreBelief:
      'We believe that healing is a gift from God. While we may pray, lay hands, and provide compassionate care, it is the Lord alone who heals according to His will and mercy.',
  },
  tl: {
    visionLabel: 'Bisyon',
    missionLabel: 'Misyon',
    coreBeliefLabel: 'Batayang paniniwala',
    scriptureLabel: 'Banal na Kasulatan',
    vision:
      'Maging isang mapagkalingang sentro ng holistic healing, panalangin, at kagalingan kung saan mararanasan ng bawat tao ang pag-ibig, biyaya, at pagpapanumbalik ng Diyos sa katawan, isipan, at espiritu. Nais naming makabuo ng isang komunidad na puno ng pananampalataya, pag-asa, at pagtitiwala sa Panginoon na siyang tunay na pinagmumulan ng lahat ng kagalingan.',
    mission:
      'Ang aming misyon ay maglingkod sa pamamagitan ng holistic care, panalangin, espirituwal na paggabay, pagpapatong ng kamay, at mga likas na pamamaraan ng pangangalaga na hinango sa ministeryo ng pagpapagaling ni Jesucristo at ng Kanyang mga apostol. Bilang mga lingkod at kasangkapan lamang ng biyaya ng Diyos, kami ay naglalaan ng malasakit, pag-asa, at suporta sa mga naghahanap ng kagalingan sa katawan, isipan, damdamin, at espiritu. Sa lahat ng aming paglilingkod, kinikilala namin na ang Panginoon lamang ang tunay na nagpapagaling at sa Kanya lamang ang lahat ng papuri at kaluwalhatian.',
    coreBelief:
      'Naniniwala kami na ang pagpapagaling ay kaloob mula sa Diyos. Maaari kaming manalangin, magpatong ng kamay, at magbigay ng maagap na pag-aalaga, ngunit ang Panginoon lamang ang nagpapagaling ayon sa Kanyang kalooban at awa.',
  },
} as const;

export type VisionLanguage = keyof typeof content;
