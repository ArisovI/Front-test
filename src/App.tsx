import styles from './App.module.scss';
import { icons } from './assets';

const subscribers = [{
  summary: '20K+',
  title: 'subscribers'
},
{
  summary: '19,5K',
  title: 'successful cases'
},
{
  summary: '4.8/5',
  title: 'rating'
}
]

const socials = [{
  icon: icons.playmarket,
  title: 'Google play'
},
{
  icon: icons.appsorte,
  title: 'App Store'
}]

const users = [{
  avatar: icons.user1,
  name: 'lorenzo',
  username: '@lorenzoo',
  comment: 'Amazing Telegram bot! Provides real-time crypto prices and news'
},
{
  avatar: icons.user2,
  name: 'Adalina',
  username: '@ada',
  comment: 'Must-have bot for crypto traders. Accurate signals and analysis'
},
{
  avatar: icons.user3,
  name: 'Alexander',
  username: '@alex_x',
  comment: 'Superb cryptocurrency bot! Quick updates and reliable data',
},
{
  avatar: icons.user4,
  name: 'Rushana',
  username: '@Hana',
  comment: 'Efficient and user-friendly bot. Simplifies crypto trading tasks',
}]

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Do you want to Learn more about cryptocurrencies <span>quickly and easily?</span>
        </h1>
        <a href="#" className={styles.link}>
          Subscribe to our channel to learn more
        </a>

        <ul className={styles.subscribers}>
          {subscribers.map((subscriber, i) => (
            <li key={i}>
              <p>{subscriber.summary}</p>
              <span>{subscriber.title}</span>
            </li>
          ))}
        </ul>

        <button className={styles.join}>Join Whatsapp</button>

        <ul className={styles.socials}>
          {socials.map((social, i) => (
            <li key={i}>
              <a href="#">
                <img src={social.icon} alt="" />
                <div>
                  <span>get it on </span>
                  <p>{social.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.users}>
        <ul className={styles.usersList}>
          {users.map((user, index) => (
            <li key={index}>
              <div className={styles.usersListItem}>
                <img src={user.avatar} alt={user.name} />
                <div className={styles.usersListItemInfo}>
                  <p>{user.name}</p>
                  <span>{user.username}</span>
                </div>
              </div>
              <p>{user.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}