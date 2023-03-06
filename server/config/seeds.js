const db = require('./connection');
const { Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Clubs', type: 'Suit' },
    { name: 'Spades', type: 'Suit' },
    { name: 'Hearts', type: 'Suit' },
    { name: 'Diamonds', type: 'Suit' },
    { name: 'Red', type: 'Colour' },
    { name: 'Black', type: 'Colour' },
    { name: 'King', type: 'Value' },
    { name: 'Queen', type: 'Value' },
    { name: 'Jack', type: 'Value' },
    { name: 'Ten', type: 'Value' },
    { name: 'Nine', type: 'Value' },
    { name: 'Eight', type: 'Value' },
    { name: 'Seven', type: 'Value' },
    { name: 'Six', type: 'Value' },
    { name: 'Five', type: 'Value' },
    { name: 'Four', type: 'Value' },
    { name: 'Three', type: 'Value' },
    { name: 'Two', type: 'Value' },
    { name: 'Ace', type: 'Value' },
    { name: 'Joker', type: 'Value' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '2 of Clubs',
      description:
        "Two of clubs means contradictions and hesitation before taking an important decision. No matter how long you think and wait, you won't be 100% certain. Two of clubs is sign that you will have to make a leap of faith. We live our lives only once. Unfortunately, there is no rehearsal.",
      image: '2_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[17]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '2 of Diamonds',
      description:
        "The two of diamonds is quite weak in cartomancy. It indicates a positive surprise that will bring joy and happiness, such as winning a game. In its negative aspects, the two of diamonds refers to an unforeseen event, a threat, and a form of jealousy that could have negative consequences, especially in your professional circle.",
      image: '2_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[17]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '2 of Hearts',
      description:
        "Two of hearts symbolizes love and passion between two hearts. If you have found your love already – you are lucky. If you are still looking for it, the Two of hearts is here to dispel your doubts. Indeed, there is someone special for you in this world. Keep looking and your will find your soulmate.",
      image: '2_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[17]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '2 of Spades',
      description:
        "Two of spades means that somebody intends to cheat you. Watch out! It could be related to money, such as extra charges in online commerce or credit card fraud. It could also be related to personal betrayal – such as a cheating husband or wife. More generally, two of spades signifies an upset balance in a relationship.",
      image: '2_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[17]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '3 of Clubs',
      description:
        "Three of clubs is a sign that your efforts will be crowned with success. Today you were dealt a good hand. You can be sure of your feelings, of your business ideas and judgement. Three of clubs is a trump that beats all the negative cards next to it. It is a fine omen that you will gain fortune and fame.",
      image: '3_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[16]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '3 of Diamonds',
      description:
        "Three of diamonds is a card of professional career. It means that you should maintain keen interest in your work and your business. Do not let another shiny object or an apparent opportunity to distract you. Three of diamonds suggests that you will be well appreciated and rewarded for your current work.",
      image: '3_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[16]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '3 of Hearts',
      description:
        "Three of hearts means success for a creative endeavor. If you decide to redecorate your home or write a symphony, or do something else that requires creativity, you are likely to reach a good result. In a broader sense, the three of hearts is a sign for a happy outcome in any business or love affair.",
      image: '3_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[16]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '3 of Spades',
      description:
        "Three of spades means a change of plans, that usually results in emotional pain and broken heart. It is a bad card, no doubt about it. In a mild case this card could announce a cancelled date or misunderstandings between two lovers. In the worst case it is an omen for a break-up or divorce.",
      image: '3_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[16]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '4 of Clubs',
      description:
        "Four of clubs indicates an exceptionally enjoyable and peaceful period. Your days will be long, sunny, uneventful and unusually happy. For a newly married couple it is a sign of a perfect honeymoon. More generally, this card is a reflection of your dreams and desires. For a precious little while they will come true.",
      image: '4_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[15]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '4 of Diamonds',
      description:
        "Four of diamonds signifies important revelations. It is like a map of hidden treasures. You could have tried and failed for years and years, and then you realize that you just have to dig in one precise spot and you will find the chest of gold. Four of diamonds means that you will get an important hint.",
      image: '4_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[15]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '4 of Hearts',
      description:
        "Four of hearts signifies discontent and frictions in a relationship. It means that you should voice your concerns and try to work them out. It is a positive sign, because this is the only way to make progress. The four of hearts reminds us that love is not granted forever after.  It requires nurturing every day.",
      image: '4_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[15]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '4 of Spades',
      description:
        "Four of spades signifies a period of loneliness in a relationship. You don’t enjoy the solitude, but your partner continues to disappoint you. Luckily, it is an omen of a short duration. Four of spades is a sign that you should look for emotional refuge elsewhere, such as your friends, work or music. Whatever loneliness you feel, it will pass.",
      image: '4_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[15]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '5 of Clubs',
      description:
        "Five of clubs is a sign that the victory in near. It beats the drums and sounds the trumpets: Don’t you dare to stop now! Set your heart on victory! Your business will prosper. You will be profoundly loved. Your relationship or marriage will be successful. Five of clubs is a sure omen that you will win a major victory in the battle of life.",
      image: '5_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[14]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '5 of Diamonds',
      description:
        "Five of diamonds is a card of reconciliation. Couples pledge to be together for better or for worse, for richer or for poorer, in sickness and in health. The Five of diamonds is a sign that your difficulties and misfortunes should not ruin your love. It means that your relationship is not beyond repair.",
      image: '5_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[14]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '5 of Hearts',
      description:
        "Five of Hearts card represents marriage. It is more about the state of a relationship than the feelings. It could signify love that was long ignored and is finally returned. It is an omen for reconciliation of a married couple. In general, the five of hearts signifies a relationship on a right track.",
      image: '5_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[14]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '5 of Spades',
      description:
        "5 of spades is a warning about an unexpected loss. In the coming days you will face elevated risks of accident, theft or decline in financial markets. The five of spades is a sign that Fortune wants to play a game with you. Take care and you still might outsmart the bad luck.",
      image: '5_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[14]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '6 of Clubs',
      description:
        "Six of clubs represents an enemy with a heavy club, who is waiting for you around the corner. It foretells disputes, suits and financial claims. Six of clubs could also mean a dangerous rival in love. Don’t fear it. You have been warned, and that is your advantage. The worst enemy is the one you don’t expect.",
      image: '6_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[13]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '6 of Diamonds',
      description:
        "The Six of diamonds means confusion. Some believe it signifies presents, others think it means absence, yet others are convinced it is a good business omen. Nobody is right or wrong. The Six of diamonds is a sign that you might be misled or confused. Check again and try to find the right directions.",
      image: '6_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[13]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '6 of Hearts',
      description:
        "Six of hearts is the card of the Cupid, who is aiming an arrow at your heart. It means falling in love. Stand still, please, while he shoots you! Joy, bells and whistles – love is coming your way! By and large the Six of hearts means the beginning of a new love affair or a marriage proposal.",
      image: '6_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[13]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '6 of Spades',
      description:
        "6 of spades means minor infidelities in a relationship. Sometimes it could be an omen of cheating and divorce, but this is a rare exception. Most often Six of spades is just a sign that a couple is not being completely sincere with each other. She would never tell the truth about the price of her new shoes. Why would she?",
      image: '6_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[13]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '7 of Clubs',
      description:
        "Seven of clubs represents a small amount of money. It could mean a relief of financial problems or buying something for a steal price. In general, it signifies trifle economies, but it is also an excellent omen for huge wealth. Why? Keep buying a dollar for fifty cents for a long time, and you will see why",
      image: '7_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[12]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '7 of Diamonds',
      description:
        "The Seven of diamonds indicates gossip and slander. It is an annoying little card, because gossip is contagious like common cold and there is no reliable cure. One nasty person can infect many others. Seven of diamonds gives you a sign that somebody is talking about you right at this moment.",
      image: '7_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[12]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '7 of Hearts',
      description:
        "Seven of hearts represents thoughts, imagination and sweet dreams. No great achievement in your life will come without you imagining it first. This card is a good omen for business plans, personal resolutions and love ambitions. Seven of hearts is a sign that you have to have the courage to dream.",
      image: '7_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[12]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '7 of Spades',
      description:
        "Seven of spades central meaning is certainty. Whatever you’ve learned in a card reading, the seven of spades confirms that it is true. It is a sign that the predictions of the other cards ware not an accident. You should take them seriously. Sometimes the seven of spades also announces an argument or a quarrel.",
      image: '7_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[12]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '8 of Clubs',
      description:
        "Eight of clubs represents a casual relationship. It depends upon your point of view, whether it is good or bad. It is a good omen for love adventure. It is a bad omen for marriage. It’s good for sex. It’s bad for passion. More generally, eight of clubs means compromises in love.",
      image: '8_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[11]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '8 of Diamonds',
      description:
        "Eight of diamonds meaning is unpredictable. On a rainy day this card announces obstacles and efforts without success. On a sunny day – on the contrary – it means good prospects for business. The deeper message of the Eight of spades is that of prudence. Even if it is sunny outside, take an umbrella.",
      image: '8_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[11]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '8 of Hearts',
      description:
        "Eight of hearts meaning is related to success in love. It is a positive sign for a fulfilling long-term relationship with the person you love. Your marriage will be happy and free of domestic sorrows and misfortunes. Eight of hearts also indicates great satisfaction with children in a family.",
      image: '8_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[11]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '8 of Spades',
      description:
        "Eight of spades is the card of sickness. In the earlier ages this terrible card was an omen for plague, injuries and infections that were invariably fatal. With the advance of the modern medicine it became less dangerous. In essence, the Eight of spades is a warning. It means that an illness is coming your way and you should take better care of your health.",
      image: '8_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[11]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '9 of Clubs',
      description:
        "Nine of clubs means independent success. Whatever is your problem at the moment, you have to stop listening to others. Nine of clubs gives you a sign that you have to think for yourself. If you follow the crowd, you will get average results. For extraordinary success, you have to act on your own.",
      image: '9_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[10]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '9 of Diamonds',
      description:
        "Nine of diamonds is a bad card without a clear meaning of its own. It just spoils everything that is nearby. Next to a heart it announces troubles in love. Next to another diamond it means a dispute. Nine of diamonds close to a club signifies financial difficulties. Finally, by a spade it means sad news.",
      image: '9_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[10]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '9 of Hearts',
      description:
        "Nine of hearts means satisfaction and joy. Anything that causes you pain is reversed or mitigated by this happy card. Nine of hearts is generally regarded as an augury of good fortune, wealth, happiness and worldly advantage. It brings a cheerful message: enjoy today and stop worrying about tomorrow.",
      image: '9_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[10]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '9 of Spades',
      description:
        "The nine of spades means death. This is the worst card of the whole deck. This card is cruel and does not make any distinction. The nine of spades can signify death of a relative, a friend, an enemy, or of an indifferent person. In the worst case it can announce death of your parents or spouse. In the very worst it means your death.",
      image: '9_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[10]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '10 of Clubs',
      description:
        "Ten of Clubs is the card of fortune. Like many other club cards, it signifies financial success and material abundance. It invokes lucky investments, unexpected inheritance, or just a wallet found on the street. In a nutshell, the Ten of clubs is a lucky omen for financial gain that you do not expect.",
      image: '10_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[9]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '10 of Diamonds',
      description:
        "Ten of Diamonds represents a journey through which you will gain riches and wealth. This card announces that you will be forced to leave your zone of comfort. This change will not be pleasant, but successful, resulting in material or spiritual wealth. In short: Ten of diamonds will bring you diamonds.",
      image: '10_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[9]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '10 of Hearts',
      description:
        "Ten of Hearts meaning is related to your city or country. It is a sign that you should have more trust in your family and people around you. They are your kin, and they will take care of your interests. Ten of hearts is a very positive omen for your family and people that are dear to you.",
      image: '10_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[9]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: '10 of Spades',
      description:
        "Ten of Spades means SADNESS mixed with tears and disappointment. It isn’t just a bad card. It’s poisonous like jealousy. It will in a great measure counteract the good effects of the cards near you. You might be overcome by the feeling that nothing is right and the only thing you wish is to be to left alone.  Ten of Spades is also a warning: take care not to get addicted to your sorrows.",
      image: '10_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[9]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Jack of Clubs',
      description:
        "Jack of clubs means a good friend and sincere lover. He is a slightly dangerous flatterer, friendly, enterprising, skillful and brave young man. For a woman, this card represents her fiancé. For a man, jack of clubs means a more successful and wealthier rival. This card also signifies education and intelligence.",
      image: 'jack_of_clubs2.png',
      categories: [categories[0]._id, categories[5]._id, categories[8]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Jack of Diamonds',
      description:
        "Isolated, the Jack of Diamonds represents the Messenger. This card also symbolizes an unfaithful assistant or employee. The Jack of diamonds is a young man who comes and goes, and takes more than is allowed. This card is a sign that you will be dealing with an intelligent man, who is very untrustworthy.",
      image: 'jack_of_diamonds2.png',
      categories: [categories[3]._id, categories[4]._id, categories[8]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Jack of Hearts',
      description:
        "The Jack of hearts signifies an honest young man in love. He is attractive, nice and generous and would like to be kind to you. This card often announces a new intimate friendship. As a lover, the Jack of hearts is often away, but is committed and sincere and would make good marriage material.",
      image: 'jack_of_hearts2.png',
      categories: [categories[2]._id, categories[4]._id, categories[8]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Jack of Spades',
      description:
        "Jack of Spades card indicates a young man of dark complexion, cunning and devious. Don’t trust him. He is intelligent, he thinks very well of himself and he will use any opportunity to take advantage of you. In a broader sense the Jack of spades is a sign that you might face adversity from a ruthless person.",
      image: 'jack_of_spades2.png',
      categories: [categories[1]._id, categories[5]._id, categories[8]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Queen of Clubs',
      description:
        "The Queen of Clubs signifies a brunette woman, who is well-behaved, very spiritual, and who loves to be of service. She is of a warm, tender, and sympathetic nature. Most men would love to marry a woman like queen of clubs. Most women are jealous of her and see her as a dangerous rival.",
      image: 'queen_of_clubs2.png',
      categories: [categories[0]._id, categories[5]._id, categories[7]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Queen of Diamonds',
      description:
        "A haughty, jealous, wicked and promiscuous woman, the Queen of Diamonds represents, isolated, your enemy. She is very talkative and a skilled manipulator of men, who easily fall for her charms. In a love reading, the queen of diamonds is a warning sign that somebody wants to steal your lover or spouse.",
      image: 'queen_of_diamonds2.png',
      categories: [categories[3]._id, categories[4]._id, categories[7]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Queen of Hearts',
      description:
        "The Queen of hearts represents sincere and loving woman of tender heart. For a man this card means his sweetheart lover or a woman he will marry. For a woman she signifies a sincere friend or a nearest relative. More generally, the Queen of hearts evokes the feelings of unconditional and caring love.",
      image: 'queen_of_hearts2.png',
      categories: [categories[2]._id, categories[4]._id, categories[7]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Queen of Spades',
      description:
        "Queen of Spades signifies distrust and prejudice. This card indicates your enemy:  a nasty woman who is jealous of you. She will slander you and will try to poison your relationships with other people.",
      image: 'queen_of_spades2.png',
      categories: [categories[1]._id, categories[5]._id, categories[7]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'King of Clubs',
      description:
        "King of clubs represents a dark man, who is loyal and kind. He is a good businessman, shrewd with money and investments, but isn’t selfish. In fact, the King of clubs is a very devoted father, husband and citizen. In a broader sense, the King of clubs  encompasses idealized qualities of a fatherly figure. This card is universally considered as a very good omen.",
      image: 'king_of_clubs2.png',
      categories: [categories[0]._id, categories[5]._id, categories[6]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'King of Diamonds',
      description:
        "The King of Diamonds represents a blond man, self-important, haughty, fearsome, deceitful; in a word, a bad man. He is quick to anger, determined and revengeful. This card often signifies a man in a dangerous occupation. In spite of his flaws, many women find the King of diamonds very attractive.",
      image: 'king_of_diamonds2.png',
      categories: [categories[3]._id, categories[4]._id, categories[6]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'King of Hearts',
      description:
        "The King of hearts card signifies personal qualities of honesty and spirituality. It represents a kind-hearted and fair man. His gentle temperament makes him a fine friend and an excellent life-partner. While passionate and amorous, the King of Hearts tends to be hasty with his feelings, especially love.",
      image: 'king_of_hearts2.png',
      categories: [categories[2]._id, categories[4]._id, categories[6]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'King of Spades',
      description:
        "King of Spades indicates a man of bad faith. He is a predator who seeks to use you for his own ends. This card often indicates a love affair with a wrong man. Even though you know that the King of spades is bad for you, you still want him.  Do not despair! You have the strength to resist him. Just say “NO”.",
      image: 'king_of_spades2.png',
      categories: [categories[1]._id, categories[5]._id, categories[6]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Ace of Clubs',
      description:
        "The Ace of clubs represents a large purse of money. Most people think that it is the luckiest card of the whole deck. The Ace of clubs is not just about purchasing power. It signifies the power of getting anything that you want. Indeed, this card is an omen of better health, happy relationships and longer life.",
      image: 'ace_of_clubs.png',
      categories: [categories[0]._id, categories[5]._id, categories[18]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Ace of Diamonds',
      description:
        "The Ace of Diamonds announces a letter or a message that you will receive soon. In a broader sense, it means that you will get a new insight into your life and your problems. The ace of diamonds could come as advice of a friend, or a book or a vivid dream at night. It will give you a new perspective.",
      image: 'ace_of_diamonds.png',
      categories: [categories[3]._id, categories[4]._id, categories[18]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Ace of Hearts',
      description:
        "Ace of Hearts represents the House of true heart. It means happiness and prosperity of people living in this house. This card often stands for a breakthrough in feelings, declaration of love or a wedding. For a married person, Ace of hearts is an omen of abundance in the house and happy family life.",
      image: 'ace_of_hearts.png',
      categories: [categories[2]._id, categories[4]._id, categories[18]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Ace of Spades',
      description:
        "Ace of Spades means stocks, financial papers and good long-term investments. It is a sign that you have to strike a balance between accumulating wealth and having time to spend it. Ace of spades is a very positive omen for your future: living in a happy marriage, traveling, hobbies, and more generally, living the life as you like it.",
      image: 'ace_of_spades.png',
      categories: [categories[1]._id, categories[5]._id, categories[18]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Black Joker',
      description:
        "Quite often, the joker is used to convey a sense of evil, creepiness, or mischief.",
      image: 'black_joker.png',
      categories: [categories[5]._id, categories[19]._id],
      price: 2.95,
      stock: 500
    },
    {
      name: 'Red Joker',
      description:
        "Quite often, the joker is used to convey a sense of evil, creepiness, or mischief.",
      image: 'red_joker.png',
      categories: [categories[5]._id, categories[19]._id],
      price: 2.95,
      stock: 500
    },
  ]);

  console.log('products seeded');

  process.exit();
});