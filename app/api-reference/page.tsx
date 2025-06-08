import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function ApiReferencePage() {
  return (
    <>
      <SiteHeader />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-babyblue-600">API Reference</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blockchain Integration APIs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive documentation for integrating with our blockchain-based real estate platform. Build
              applications that interact with tokenized properties, smart contracts, and on-chain data.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {/* Property Token API */}
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:px-10">
              <h3 className="text-lg font-semibold text-gray-900">Property Token API</h3>
              <p className="mt-2 text-sm text-gray-500">Interact with tokenized real estate assets.</p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-md font-medium text-gray-900">Get Property Token</h4>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>GET /api/tokens/:tokenId</code>
                </pre>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Parameters:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-500">
                  <li>
                    <code>tokenId</code> (required): The ID of the property token to retrieve.
                  </li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Response:</strong>
                </p>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>
                    {`
{
  "tokenId": "0x123abc...",
  "propertyAddress": "123 Blockchain Ave, Crypto City",
  "tokenStandard": "ERC-721",
  "ownerAddress": "0xdef456...",
  "metadata": {
    "propertyType": "Commercial",
    "squareFootage": 2500,
    "yearBuilt": 2018,
    "amenities": ["Parking", "Security System"]
  },
  "valuation": {
    "lastAppraisal": "2023-05-15",
    "value": "450000",
    "currency": "USD"
  },
  "rentalStatus": {
    "isRented": true,
    "monthlyRevenue": "3200",
    "leaseExpiration": "2024-03-01"
  }
}
                    `}
                  </code>
                </pre>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-md font-medium text-gray-900">Get Token Transaction History</h4>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>GET /api/tokens/:tokenId/history</code>
                </pre>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Parameters:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-500">
                  <li>
                    <code>tokenId</code> (required): The ID of the property token.
                  </li>
                  <li>
                    <code>limit</code> (optional): Maximum number of transactions to return.
                  </li>
                  <li>
                    <code>offset</code> (optional): Number of transactions to skip.
                  </li>
                </ul>
              </div>
            </div>

            {/* Smart Contract API */}
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:px-10">
              <h3 className="text-lg font-semibold text-gray-900">Smart Contract API</h3>
              <p className="mt-2 text-sm text-gray-500">Interact with property-related smart contracts.</p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-md font-medium text-gray-900">Get Rental Agreement</h4>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>GET /api/contracts/rental/:contractAddress</code>
                </pre>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Parameters:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-500">
                  <li>
                    <code>contractAddress</code> (required): The address of the rental agreement smart contract.
                  </li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Response:</strong>
                </p>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>
                    {`
{
  "contractAddress": "0x789def...",
  "propertyTokenId": "0x123abc...",
  "tenantAddress": "0xabc123...",
  "terms": {
    "startDate": "2023-01-01",
    "endDate": "2023-12-31",
    "monthlyRent": "2500",
    "securityDeposit": "5000",
    "currency": "USDC"
  },
  "paymentHistory": [
    {
      "date": "2023-01-01",
      "amount": "2500",
      "transactionHash": "0xabc123..."
    },
    {
      "date": "2023-02-01",
      "amount": "2500",
      "transactionHash": "0xdef456..."
    }
  ],
  "status": "active"
}
                    `}
                  </code>
                </pre>
              </div>
            </div>

            {/* Marketplace API */}
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:px-10">
              <h3 className="text-lg font-semibold text-gray-900">Marketplace API</h3>
              <p className="mt-2 text-sm text-gray-500">Interact with the property token marketplace.</p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-md font-medium text-gray-900">List Available Properties</h4>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>GET /api/marketplace/listings</code>
                </pre>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Parameters:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-500">
                  <li>
                    <code>propertyType</code> (optional): Filter by property type (residential, commercial, etc.).
                  </li>
                  <li>
                    <code>minPrice</code> (optional): Minimum price in USD.
                  </li>
                  <li>
                    <code>maxPrice</code> (optional): Maximum price in USD.
                  </li>
                  <li>
                    <code>location</code> (optional): Filter by location.
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-md font-medium text-gray-900">Create Listing</h4>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>POST /api/marketplace/listings</code>
                </pre>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Request Body:</strong>
                </p>
                <pre className="mt-2 rounded-md bg-gray-100 p-4 text-sm overflow-x-auto">
                  <code>
                    {`
{
  "tokenId": "0x123abc...",
  "price": "450000",
  "currency": "USDC",
  "listingType": "full", // or "fractional"
  "fractionSize": "0.1", // if fractional, percentage of ownership
  "expirationDate": "2023-12-31"
}
                    `}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-gray-900">Need More Help?</h3>
            <p className="mt-2 text-gray-600">
              Our API documentation is continuously updated. If you need assistance or have questions, please reach out
              to our developer support team.
            </p>
            <div className="mt-6">
              <a
                href="/contact-developer-support"
                className="rounded-md bg-babyblue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-babyblue-500"
              >
                Contact Developer Support
              </a>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  )
}
