import React from 'react'
import Link from 'next/link'
import styles from './card.module.scss'
import { Tag } from './tag'

interface Props {
  title: string
  description: string
  small?: boolean
  tag?: string
  url?: string
  className?: string
}

export function Card(props: Props) {
  let className = `${styles.card} fixed block`
  if (props.className) className += ` ${props.className}`
  if (props.small) className += ` ${styles.small}`

  return (
    <div className={className}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.footer}>
        {props.tag && 
          <Tag text={props.tag} />
        }
        {props.url && 
          <Link href={props.url}>
            <button className="accent block">&raquo;</button>
          </Link>
        }
      </div>
    </div>

  )
}