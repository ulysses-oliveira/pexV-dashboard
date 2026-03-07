import {
  getSummary,
  getSalesByDay,
  getSalesByFlavor,
} from './dashboard.repository'

export async function getSummaryService() {
  return getSummary()
}

export async function getSalesByDayService() {
  return getSalesByDay()
}

export async function getSalesByFlavorService() {
  return getSalesByFlavor()
}