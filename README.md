# Herramientas para Terraform

### Terrext

Terrext is a tool that help you to validate terraform code base in a given rules

Only accepts \*.tf.json.

Tools for terraform CI/CD

```shell
$ terrext --help
```

```shell
terrext [command]

Commands:
  terrext paths      Return all realpath for each .tf.json file in a folder.
  terrext resources  List all resource with their custom names.
  terrext tags       List all tags for each resource in a terraform file.

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]                                  [boolean]
```
