import { notFound } from "next/navigation"

// This would typically come from your API or database
async function getMaintenanceRequest(id: string) {
  // Simulate API call
  const response = await fetch(`/api/maintenance?id=${id}`, { cache: "no-store" })
  if (!response.ok) return null
  return response.json()
}

export default async function MaintenanceDetailPage({ params }: { params: { id: string } }) {
  const maintenanceRequest = await getMaintenanceRequest(params.id)

  if (!maintenanceRequest) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Maintenance Request #{params.id}</h1>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              maintenanceRequest.status === "completed"
                ? "bg-green-100 text-green-800"
                : maintenanceRequest.status === "in-progress"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {maintenanceRequest.status}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Request Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Property</p>
                <p className="font-medium">{maintenanceRequest.property}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Reported By</p>
                <p className="font-medium">{maintenanceRequest.reportedBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date Reported</p>
                <p className="font-medium">{maintenanceRequest.dateReported}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Priority</p>
                <p className="font-medium">{maintenanceRequest.priority}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Issue Description</h2>
            <p className="text-gray-700">{maintenanceRequest.description}</p>

            {maintenanceRequest.images && maintenanceRequest.images.length > 0 && (
              <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">Attached Images</h3>
                <div className="grid grid-cols-2 gap-2">
                  {maintenanceRequest.images.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Issue image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Maintenance History</h2>
          <div className="space-y-4">
            {maintenanceRequest.history &&
              maintenanceRequest.history.map((entry: any, index: number) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4 py-2">
                  <p className="text-sm text-gray-500">{entry.date}</p>
                  <p className="font-medium">{entry.action}</p>
                  <p className="text-gray-700">{entry.notes}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            Update Status
          </button>
          <button className="px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  )
}
