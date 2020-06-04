
package ch.mabaka.visitorregistrator.filter;

import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * A filter to forward all requests that cause a 404 HTTP error to /. This
 * allows to use path in the client (JS) code.
 * 
 * Code taken from <a href=
 * "https://github.com/kabir/blog-quarkus-ui-development/blob/master/src/main/java/org/kabir/quarkus/ui/AngularRouteFilter.java">https://github.com/kabir/blog-quarkus-ui-development/blob/master/src/main/java/org/kabir/quarkus/ui/AngularRouteFilter.java</a>
 * 
 * @author <a href="mailto:kabir.khan@jboss.com">Kabir Khan</a>
 */
@WebFilter(urlPatterns = "/*")
public class ClientRouteFilter extends HttpFilter {

	private static final long serialVersionUID = 1L;

	private static final Pattern FILE_NAME_PATTERN = Pattern.compile(".*[.][a-zA-Z\\d]+");

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;
		chain.doFilter(request, response);

		if (response.getStatus() == 404) {
			String path = request.getRequestURI().substring(request.getContextPath().length()).replaceAll("[/]+$", "");
			if (!FILE_NAME_PATTERN.matcher(path).matches()) {
				// We could not find the resource, i.e. it is not anything known to the server
				// (i.e. it is not a REST
				// endpoint or a servlet), and does not look like a file so try handling it in
				// the front-end routes.
				request.getRequestDispatcher("/").forward(request, response);
			}
		}
	}
}