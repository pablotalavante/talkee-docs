// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './promptblock.module.css'

export default function PromptBlock({ message }) {

  return (
    <div className={styles.codeBlockWrapper}>
      {message}
    </div>
  )
}
