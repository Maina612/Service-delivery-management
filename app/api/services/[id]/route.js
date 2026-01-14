import { NextResponse } from 'next/server'

// In-memory storage (same as parent route - replace with database in production)
// In production, this would be imported from a shared data source
let services = [
  {
    id: 'SR-001',
    title: 'Website Performance Optimization',
    requester: 'John Smith',
    type: 'IT Support',
    createdAt: '2024-01-15',
    priority: 'High',
    status: 'Pending',
    description: 'Need to optimize website loading speed and improve Core Web Vitals scores.'
  },
  {
    id: 'SR-002',
    title: 'Database Migration',
    requester: 'Sarah Johnson',
    type: 'Cloud Solutions',
    createdAt: '2024-01-14',
    priority: 'Critical',
    status: 'In Progress',
    description: 'Migrate production database to new cloud infrastructure with zero downtime.'
  },
  {
    id: 'SR-003',
    title: 'Security Audit',
    requester: 'Mike Chen',
    type: 'Security Services',
    createdAt: '2024-01-13',
    priority: 'High',
    status: 'Completed',
    description: 'Comprehensive security audit and penetration testing completed successfully.'
  },
  {
    id: 'SR-004',
    title: 'API Integration',
    requester: 'Emily Davis',
    type: 'DevOps',
    createdAt: '2024-01-12',
    priority: 'Medium',
    status: 'Pending',
    description: 'Integrate third-party payment API with existing e-commerce platform.'
  },
  {
    id: 'SR-005',
    title: 'Data Analytics Setup',
    requester: 'David Wilson',
    type: 'Data Analytics',
    createdAt: '2024-01-11',
    priority: 'Medium',
    status: 'In Progress',
    description: 'Set up advanced analytics dashboard with real-time data visualization.'
  }
]

// GET - Fetch a specific service request by ID
export async function GET(request, { params }) {
  try {
    const { id } = params

    const service = services.find(s => s.id === id)

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          error: 'Service not found',
          message: `Service request with ID ${id} does not exist`
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: service
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch service',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// PATCH - Update a service request (status, priority, etc.)
export async function PATCH(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()

    const serviceIndex = services.findIndex(s => s.id === id)

    if (serviceIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Service not found',
          message: `Service request with ID ${id} does not exist`
        },
        { status: 404 }
      )
    }

    // Validate status if provided
    if (body.status) {
      const validStatuses = ['Pending', 'In Progress', 'Completed']
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid status',
            message: `Status must be one of: ${validStatuses.join(', ')}`
          },
          { status: 400 }
        )
      }
    }

    // Validate priority if provided
    if (body.priority) {
      const validPriorities = ['Low', 'Medium', 'High', 'Critical']
      if (!validPriorities.includes(body.priority)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid priority',
            message: `Priority must be one of: ${validPriorities.join(', ')}`
          },
          { status: 400 }
        )
      }
    }

    // Update service
    const updatedService = {
      ...services[serviceIndex],
      ...body,
      updatedAt: new Date().toISOString()
    }

    services[serviceIndex] = updatedService

    return NextResponse.json({
      success: true,
      data: updatedService,
      message: 'Service request updated successfully'
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update service',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// DELETE - Delete a service request
export async function DELETE(request, { params }) {
  try {
    const { id } = params

    const serviceIndex = services.findIndex(s => s.id === id)

    if (serviceIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Service not found',
          message: `Service request with ID ${id} does not exist`
        },
        { status: 404 }
      )
    }

    const deletedService = services.splice(serviceIndex, 1)[0]

    return NextResponse.json({
      success: true,
      data: deletedService,
      message: 'Service request deleted successfully'
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete service',
        message: error.message
      },
      { status: 500 }
    )
  }
}
