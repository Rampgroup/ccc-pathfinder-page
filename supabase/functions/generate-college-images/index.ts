import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { collegeName } = await req.json()
    
    // Get the Runware API key from environment variables
    const runwareApiKey = Deno.env.get('RUNWARE_API_KEY')
    
    if (!runwareApiKey) {
      throw new Error('RUNWARE_API_KEY not found in environment variables')
    }

    // Generate college-related image using Runware API
    const response = await fetch('https://api.runware.ai/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          taskType: "authentication",
          apiKey: runwareApiKey
        },
        {
          taskType: "imageInference",
          taskUUID: crypto.randomUUID(),
          positivePrompt: `${collegeName} university campus logo, modern educational institution emblem, clean professional design, circular logo format, academic symbols, blue and gold colors, high quality`,
          width: 512,
          height: 512,
          model: "runware:100@1",
          numberResults: 1,
          outputFormat: "WEBP"
        }
      ])
    })

    const data = await response.json()
    
    if (data.error) {
      throw new Error(data.errorMessage || 'Failed to generate image')
    }

    // Find the image inference result
    const imageResult = data.data.find((item: any) => item.taskType === "imageInference")
    
    if (!imageResult || !imageResult.imageURL) {
      throw new Error('No image URL returned from API')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        imageURL: imageResult.imageURL,
        collegeName: collegeName
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error generating college image:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to generate image' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})