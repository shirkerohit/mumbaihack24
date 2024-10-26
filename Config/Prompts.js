export const prompt = {
    identify : `Task: Extract only the exact ingredient names and their quantity from the provided text.
**Instructions:**
1. Carefully identify all ingredient names mentioned in the text.
2. Exclude any extra descriptions or nutritional values; list extact ingredient names.
3. Return the ingredient names in a single with quantity only if available and mentioned as comma-separated line with no additional formatting.
`,
    recommend : `Task: Analyze the provided ingredient list, generate a one-line summary of the main ingredients, identify any unhealthy items, and give a final recommendation.
**Instructions:**
1. Read through the list of ingredients carefully.
2. Generate a single-line summary of the main ingredients.
3. Identify any unhealthy ingredients eg high amount of artificial additives, or preservatives, and summarize them briefly in the "Unhealthy" field else mention "none".
4. Determine a verdict recommendation:
   - Use "acceptable" if there are most of the ingredients with some health effects but no significant health risks.
   - Use "healthy" if there are purely healthy elements or elements with health benefits.
   - Use "avoidable" if there are mix of the ingredients with some health effects but no significant health risks.
    - Use "unhealthy" if there are more ingredients with potential hazard health effects.
5. Ensure the final response return a single object and uses double quotes around all keys and values, with no extra symbols, characters, or formatting.
Return the response in the following JSON format:
JSON
{
  "Summary": "<one-line summary of main ingredients>",
  "Unhealthy": "<one-line summary of any unhealthy ingredients, or 'None' if there are none>",
  "Verdict": "<healthy | avoidable | recommended | unhealthy>"
}`,
recommend2 : `Task: Analyze the provided ingredient list, generate a one-line summary of the main ingredients, identify any unhealthy items, and give a final recommendation.
**Instructions:**
1. Read through the list of ingredients carefully.
2. Generate a single-line summary of the main ingredients.
3. Identify any unhealthy ingredients eg high amount of artificial additives, or preservatives, and summarize them briefly in the "Unhealthy" field else mention "none".
4. Consider the age, gender parameters while providing recommendation and generating the summary.
5. Determine a verdict recommendation:
   - Use "acceptable" if there are most of the ingredients with some health effects but no significant health risks.
   - Use "healthy" if there are purely healthy elements or elements with health benefits.
   - Use "avoidable" if there are mix of the ingredients with some health effects but no significant health risks.
    - Use "unhealthy" if there are more ingredients with potential hazard health effects.
6. Ensure the final response return a single object and uses double quotes around all keys and values, with no extra symbols, characters, or formatting.
Return the response in the following JSON format:
JSON
{
  "Summary": "<one-line summary of main ingredients>",
  "Unhealthy": "<one-line summary of any unhealthy ingredients, or 'None' if there are none>",
  "Verdict": "<healthy | avoidable | recommended | unhealthy>"
}`,

    why : `You are tasked with analyzing a provided ingredient and assessing its health impact.
        **Instructions:**
        1. Review the ingredient carefully.
        2. Assess if it is generally good or bad for health.
        3. Provide a brief explanation of the health impact, explaining why it is considered good or bad.
        4. Ensure that all keys and values are enclosed in double quotes and do not include any additional symbols or backticks around the response.
        5. Return the response strictly in the following JSON format:
        json
        {
        "Ingredient": "<ingredient name>",
        "Assessment": "<good | bad>",
        "Reason": "<brief explanation>"
        }`
}

export const systemPrompts = {
    context : 'You are a nutritionist and health inspector specializing in analyzing food ingredients for their health impact. Your role is to evaluate each ingredient for potential harm, identify those that may contribute to adverse health effects (e.g., high sugar, sodium, trans fats, or artificial additives), and explain why certain ingredients may be unsuitable. When responding, conclude with a summary of your overall findings and health recommendations. please note that answer will be short.note : do not use sentance like that before result (eg.Based on the provided ingredient list, here are my findings)'
}