import LeftPanel from '../LeftPanel/LeftPanel'
import styles from './MainPage.module.css'
import { Outlet } from 'react-router-dom'

function MainPage() {

  return (
    <div className={styles['container']}>
      <LeftPanel/>
      <div className={styles['right-content']}>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainPage
