# RESTful API

- **API**: Stands for Application Programming Interface.

  - It refers to a set of `functions` and `protocols` that allows different software applications to communicate and interact with each other.
  - For a server, it can be thought of as the `URLs` that clients can use to access its resources.

- **~ful**: A suffix indicating full of, having the nature of.

- **RESTful**: Referring to the nature or characteristics of REST (Representational State Transfer).

- **Representational State Transfer (REST)**: A design style for networked applications. It involves grouping related data (such as files or database entries) into URLs and providing these URLs to clients. Clients can then request data by choosing specific URLs. The server responds with the state of the requested resource.

  > Example:
  > Let's consider an online book store implementing a RESETful API.
  > Suppose the bookstore has a variety of books, and it wants to provide information about them through a RESTful API. Each book is a resource with its unique attributes, such as title, author, and publication year. Here's how REST principles apply:
  >
  > 1. **Resource Identification**: Each book is uniquely identified by an ISBN (International Standard Book Number). The bookstore's server exposes URLs like:
  >    /books/9781234567890
  >    /books/9789876543210
  > 2. **Resource Representation**: When a client requests a specific book using the ISBN-based URL, the server responds with a representation of that book's attributes. This could be in JSON or XML format, containing details like title, author, and publication year.
  > 3. **State Transfer**: Suppose a client wants to get information about a book with ISBN 9781234567890. The client makes an HTTP GET request to the URL /books/9781234567890. The server responds with the current state of the requested book:
  >    {
  >    "title": "Example Book",
  >    "author": "John Doe",
  >    "publicationYear: 2023
  >    }
  > 4. **Resource Manipulation**: Clients can also perform actions on resources. For instance, if a client wants to update the title of a book, it can send an HTTP PUT or PATCH request with the new title data to the appropriate URL.

- **Roy Fielding**: Coined the term REST and outlined its principles in his dissertation "Architectural Styles and Design of Network-based Software Applications."

- **HTTP Methods**: Used to design URLs in a RESTful manner.

- **Software Architectural Style**: REST is a guideline for designing web services with a particular structure.

#### The 6 Guiding Constraints of a RESTful System

1. **Client-Server Architecture**: This principle establishes a clear separation between clients (applications or devices that make requests) and servers (which store data and provide services). By operating independently, the server can evolve without affecting the clients and vice versa. This promotes scalability and flexibility.

2. **Statelessness**: In this context, statelessness means that every request from a client to a server should contain all the information needed for the server to fulfill it. The server doesn't hold any memory of past requests, ensuring that each request is self-contained. This simplifies server management and allows for better reliability and fault tolerance.

3. **Cacheability**: Cacheability refers to the ability to store responses from the server in a cache (temporary storage) on the client side or intermediary servers. Caching responses can significantly improve performance by reducing the need to repeatedly request the same data from the server. This is particularly useful for resources that don't change frequently.

4. **Layered System**: A layered system architecture allows for a hierarchical arrangement of components. Clients can interact with the visible APIs provided by the server without needing to understand the complexities of the internal components. This encapsulation enables easier maintenance and updates to individual layers without affecting the entire system.

5. **Code on Demand**: This is an optional constraint that allows the server to send executable code (such as scripts or applets) to the client. The client can then run this code, extending its functionality. While not often used, this constraint adds flexibility and dynamism to the application.

6. **Uniform Interface**: The cornerstone of a RESTful API, the uniform interface ensures consistency in how clients interact with the server. This constraint is further broken down into:

   - Resource Identification in Requests: Clients must be able to identify resources they want to interact with through URLs.
   - Resource Manipulation through Representations: Clients work with representations of resources (e.g., JSON or XML), which describe how to interact with the resource.
   - Self-descriptive Messages: Server responses include information on how the client should process them, reducing the need for prior knowledge about the server's behavior.
   - Hypermedia as the Engine of Application State (HATEOAS): Clients discover available actions by following hyperlinks provided by the server, enabling a more intuitive and adaptable user experience.

In summary, RESTful APIs are designed based on the principles of Representational State Transfer. They allow clients to access resources on a server through URLs and interact with those resources using the HTTP methods, following constraints like statelessness, cacheability, and a uniform interface for effective communication between applications.
