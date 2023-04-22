import nmap from "../../../public/nmap.png"
import hydra from "../../../public/hydra.png"

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
]