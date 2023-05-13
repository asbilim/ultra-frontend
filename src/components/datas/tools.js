import nmap from "../../../public/nmap.png"
import hydra from "../../../public/hydra.png"
import dork from "../../../public/dork.png"
import sabitou from "../../../public/sabitou2.png"

export const ToolsData = [
    {
        "name": "Nmap",
        "url":"nmap",
        "image": nmap.src,
        "description": "Nmap is a powerful network exploration and security auditing tool. It allows you to discover hosts and services on a computer network, as well as create a map of the network.",
        "warning": "Please use Nmap responsibly and with the appropriate permissions. Scanning networks that you do not own or have permission to scan can be illegal and result in legal consequences."
    },
    {
        "name": "Hydra",
        "image": hydra.src,
        "url":"hydra",
        "description": "Hydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add.",
        "warning": "Please use Hydra responsibly and with the appropriate permissions. Attempting to crack passwords without the owner's permission is illegal and may result in legal consequences."
    },
    {
        "name": "DorkMan",
        "image": dork.src,
        "url":"dork",
        "description": "DorkMan is an easy to use tool that can generate google dorks to reduce the time of research by including keywords that will make the research more easy.",
        "warning": "Please use  DorkMan responsibly and with the appropriate permissions. Attempting to crack passwords without the owner's permission is illegal and may result in legal consequences."
    },
    {
        "name": "Sabitou",
        "image": sabitou.src,
        "url": "sabitou",
        "description": "Sabitou is a powerful tool that can provide detailed information about any domain name or IP address. It can help you identify the owner of a website, the location of a server, and much more.",
        "warning": "Please use Sabitou responsibly and with the appropriate permissions. Attempting to gather information about a website or server without the owner's permission may be illegal and may result in legal consequences."
    }

]