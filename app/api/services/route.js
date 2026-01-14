import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
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

// GET - Fetch all service requests (with optional filtering)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const priority = searchParams.get('priority')
    const type = searchParams.get('type')

    let filteredServices = [...services]

    // Apply filters
    if (status && status !== 'All') {
      filteredServices = filteredServices.filter(service => service.status === status)
    }

    if (priority) {
      filteredServices = filteredServices.filter(service => service.priority === priority)
    }

    if (type) {
      filteredServices = filteredServices.filter(service => service.type === type)
    }

    // Sort by created date (newest first)
    filteredServices.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    return NextResponse.json({
      success: true,
      data: filteredServices,
      count: filteredServices.length,
      total: services.length
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch services',
        message: error.message
      },
      { status: 500 }
    )
  }
}

// POST - Create a new service request
export async function POST(request) {
  try {
    const body = await request.json()
    const { title, requester, type, priority, description } = body

    // Validation
    if (!title || !requester || !type || !priority) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'Title, requester, type, and priority are required'
        },
        { status: 400 }
      )
    }

    // Validate priority
    const validPriorities = ['Low', 'Medium', 'High', 'Critical']
    if (!validPriorities.includes(priority)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid priority',
          message: `Priority must be one of: ${validPriorities.join(', ')}`
        },
        { status: 400 }
      )
    }

    // Generate new service ID
    const lastId = services.length > 0 
      ? parseInt(services[services.length - 1].id.split('-')[1])
      : 0
    const newId = `SR-${String(lastId + 1).padStart(3, '0')}`

    // Create new service request
    const newService = {
      id: newId,
      title: title.trim(),
      requester: requester.trim(),
      type: type.trim(),
      priority,
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0],
      description: description?.trim() || '',
      updatedAt: new Date().toISOString()
    }

    // Add to services array
    services.push(newService)

    return NextResponse.json(
      {
        success: true,
        data: newService,
        message: 'Service request created successfully'
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create service request',
        message: error.message
      },
      { status: 500 }
    )
  }
}
