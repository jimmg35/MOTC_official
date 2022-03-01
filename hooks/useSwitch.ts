import React, { useState } from 'react'

export type SwitchItemType<T> = {
  id: number | string,
  value: T
}

const useSwitch = <T>(switchItems: Array<SwitchItemType<T>>) => {
  const [currentValue, setcurrentValue] = useState(switchItems[0].value)
  const [currentId, setcurrentId] = useState(switchItems[0].id)

  const switchTo = (id: SwitchItemType<T>['id']) => {
    const target = switchItems.find(item => item.id === id)
    if (target) {
      setcurrentValue(target.value)
      setcurrentId(id)
    } else {
      throw new Error(`id: ${id} not found.`)
    }
  }

  return {
    currentValue,
    switchTo,
    currentId
  }
}

export default useSwitch
