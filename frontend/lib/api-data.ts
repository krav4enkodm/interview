import { z } from 'zod'
import {
  customerSchema,
  dashboardKpisSchema,
  repairOrderSchema,
  repairOrderStatusSchema,
  vehicleSchema,
} from '@/lib/api-schemas'

export type Customer = z.infer<typeof customerSchema>
export type Vehicle = z.infer<typeof vehicleSchema>
export type RepairOrderStatus = z.infer<typeof repairOrderStatusSchema>
export type RepairOrder = z.infer<typeof repairOrderSchema>
export type Kpis = z.infer<typeof dashboardKpisSchema>

export const customers: Customer[] = [
  {
    id: 'cus_001',
    name: 'Jane Cooper',
    phone: '+1-555-0101',
    email: 'jane@example.com',
  },
  {
    id: 'cus_002',
    name: 'Wade Warren',
    phone: '+1-555-0102',
    email: 'wade@example.com',
  },
]

export const vehicles: Vehicle[] = [
  {
    id: 'veh_001',
    customerId: 'cus_001',
    year: 2019,
    make: 'Toyota',
    model: 'Camry',
    vin: '4T1B11HK0KU123456',
    mileage: 84210,
  },
  {
    id: 'veh_002',
    customerId: 'cus_002',
    year: 2017,
    make: 'Honda',
    model: 'Civic',
    vin: '2HGFC2F59HH654321',
    mileage: 102340,
  },
]

export const repairOrders: RepairOrder[] = [
  {
    id: 'ro_1001',
    vehicleId: 'veh_001',
    status: 'in_progress',
    openedAt: '2026-02-24T10:00:00Z',
    laborTotal: 180.0,
    partsTotal: 95.5,
    tax: 22.8,
    grandTotal: 298.3,
  },
  {
    id: 'ro_1002',
    vehicleId: 'veh_002',
    status: 'waiting_parts',
    openedAt: '2026-02-25T15:30:00Z',
    laborTotal: 120.0,
    partsTotal: 210.0,
    tax: 27.2,
    grandTotal: 357.2,
  },
]

export const dashboardKpis: Kpis = {
  carCountToday: 14,
  revenueToday: 4230.5,
  averageRO: 302.18,
  openROs: 9,
}
