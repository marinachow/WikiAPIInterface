import mysql.connector
import requests
from datetime import datetime

WIKIPEDIA_API_URL = "https://en.wikipedia.org/w/api.php"

# MySQL database configuration
DB_CONFIG = {
    'user': 'root',
    'password': '',
    'host': '127.0.0.1',
    'database': 'wiki_db'
}

def search_wikipedia(query):
    # Define parameters for the API request
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": query,
        "utf8": 1,
        "prop": "info",
        "inprop": "url|talkid|displaytitle"
    }

    # Make a request to the Wikipedia API
    response = requests.get(WIKIPEDIA_API_URL, params=params)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Extract and return the search results
        data = response.json()
        return data['query']['search']
    else:
        # If the request was not successful, print an error message
        print("Error: Unable to fetch data from Wikipedia API")
        return None

from datetime import datetime

def store_search_results(language, search_results, cursor):
    # Insert programming language into ProgrammingLanguages table
    cursor.execute("INSERT INTO ProgrammingLanguages (language_name) VALUES (%s)", (language,))
    language_id = cursor.lastrowid

    # Insert search results into SearchResults table
    for result in search_results:
        # Construct the link for the article
        base_wikipedia_url = "https://en.wikipedia.org/wiki/"
        page_id = result['pageid']
        article_title = result['title'].replace(" ", "_")  # Replace spaces with underscores
        article_link = base_wikipedia_url + article_title
        wordcount = result.get('wordcount', None)
        date = result.get('timestamp', None)

        # Insert the search result into the database
        cursor.execute("INSERT INTO SearchResults (language_id, title, snippet, link, date, wordcount) VALUES (%s, %s, %s, %s, %s, %s)",
               (language_id, result['title'], result['snippet'], article_link, date, wordcount))

    # Commit the changes to the database
    conn.commit()

if __name__ == "__main__":
    # Connect to the MySQL database
    conn = mysql.connector.connect(**DB_CONFIG)
    cursor = conn.cursor()

    # List of programming languages
    programming_languages = ["Python", "Java", "JavaScript", "Ruby", "Go", "Swift"]

    # Iterate through each programming language and search Wikipedia
    for language in programming_languages:
        print(f"Storing search results for '{language}'...")
        search_results = search_wikipedia(f"{language} programming language")

        if search_results:
            # Store search results in the database
            store_search_results(language, search_results, cursor)
            conn.commit()
            print(f"Search results for '{language}' stored successfully.")

    # Close cursor and connection
    cursor.close()
    conn.close()
